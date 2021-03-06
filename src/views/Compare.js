import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { useStyles } from '../styles'
import { Input } from '@material-ui/core';

const Compare = () => {

    const classes = useStyles()

    // initialize defaulr variables
    const [exchange, setExchange] = useState({
        EURO: 1,
        USD: 1
    })

    // will contain mark-up % & handling charges (USD)
    const [quantities, setQuantities] = useState({})

    // stock items to write to file
    const [stock, setStock] = useState({})

    const parseStockAvailbleFile = (data) => {
        let renderedData = XLSX.read(data, { type: 'binary' });
        const dataParse = XLSX.utils.sheet_to_json(renderedData.Sheets[renderedData.SheetNames[0]], { header: 1 });

        setExchange({
            EURO: dataParse[3][2],
            USD: dataParse[4][2]
        })
        for (let i = 2; i < dataParse[0].length; i++) {
            let quantity = parseInt(dataParse[0][i])
            if (!(quantity in quantities))
                quantities[quantity] = {
                    handlingCharge: dataParse[1][i],
                    markUp: dataParse[2][i]
                }
        }
        for (let i = 7; i < dataParse.length; i++) {
            if (dataParse[i][1] === undefined)
                break
            const mpn = dataParse[i][1]
            const brand = dataParse[i][2]
            const qty = dataParse[i][3]
            const remarks = dataParse[i][4] === undefined ? '' : dataParse[i][4]
            if (qty != 0) {
                stock[mpn] = {
                    brand,
                    qty,
                    remarks
                }
            }
        }
    }

    const parseOpenPoPriceList = (data) => {
        let renderedData = XLSX.read(data, { type: 'binary' });
        const dataParse = XLSX.utils.sheet_to_json(renderedData.Sheets[renderedData.SheetNames[0]], { header: 1 });
        for (let i = 1; i < dataParse.length; i++) {
            if (dataParse[i][1] === undefined)
                break
            const mpn = dataParse[i][0]
            const opoCurr = dataParse[i][1]
            const opoPrice = dataParse[i][2]
            const opoDate = excelDateToJSDate(dataParse[i][3])

            if (mpn in stock) {
                // check for existing entry (check for date key)
                if (stock[mpn]['opoDate'] != null) {
                    // compare date
                    if ((stock[mpn]['opoDate'] === opoDate.getTime() && (stock[mpn]['opoPrice'] * exchange[stock[mpn]['opoCurr']] < opoPrice * exchange[opoCurr])) || stock[mpn]['opoDate'] < opoDate.getTime()) {
                        // replace existing item
                        stock[mpn] = {
                            ...stock[mpn],
                            opoCurr,
                            opoPrice,
                            opoDate
                        }
                    }
                } else {
                    // set item
                    stock[mpn] = {
                        ...stock[mpn],
                        opoCurr,
                        opoPrice,
                        opoDate
                    }
                }
            }
        }
    }

    const parseGoodsReceivedPriceList = (data) => {
        let renderedData = XLSX.read(data, { type: 'binary' });
        const dataParse = XLSX.utils.sheet_to_json(renderedData.Sheets[renderedData.SheetNames[0]], { header: 1 });
        for (let i = 1; i < dataParse.length; i++) {
            if (dataParse[i][1] === undefined)
                break
            const mpn = dataParse[i][1]
            const grCurr = dataParse[i][2]
            const grPrice = dataParse[i][3]
            const grDate = excelDateToJSDate(dataParse[i][0])

            if (mpn in stock) {
                // check for existing entry (check for date key)
                if (stock[mpn]['grDate'] != null) {
                    // compare date
                    if ((stock[mpn]['grDate'] === grDate.getTime() && (stock[mpn]['grPrice'] * exchange[stock[mpn]['grCurr']] < grPrice * exchange[grCurr])) || stock[mpn]['grDate'] < grDate.getTime()) {
                        // replace existing item
                        stock[mpn] = {
                            ...stock[mpn],
                            grCurr,
                            grPrice,
                            grDate
                        }
                    }
                } else {
                    // set item
                    stock[mpn] = {
                        ...stock[mpn],
                        grCurr,
                        grPrice,
                        grDate
                    }
                }
            }
        }
    }

    const onFileChange = (e, fileNo) => {
        e.preventDefault();
        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            if (fileNo === 1)
                parseStockAvailbleFile(e.target.result)
            else if (fileNo === 2)
                parseOpenPoPriceList(e.target.result)
            else
                parseGoodsReceivedPriceList(e.target.result)
        };
        reader.readAsBinaryString(f)
    }

    const excelDateToJSDate = (serial) => {
        var utc_days = Math.floor(serial - 25569);
        var utc_value = utc_days * 86400;
        var date_info = new Date(utc_value * 1000);
        return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate());
    }

    const downloadFile = () => {

        /* Write and Download File */
        let workbookRows = []
        let mpns = Object.keys(stock)
        let myHeader = ['Line', 'MPN', 'Brand', 'Stock', 'Curr (GR)', 'Price (GR)', 'Curr (OPO)', 'Price (OPO)']
        for (let i = 0; i < Object.keys(quantities); i++) {
            myHeader.push(Object.keys(quantities)[i])
        }

        for (let i = 0; i < mpns.length; i++) {
            let row = {}
            let mpn = mpns[i]
            row['Line'] = i + 1
            row['MPN'] = mpn
            row['Brand'] = stock[mpn]['brand']
            row['Stock'] = stock[mpn]['qty']
            row['Curr (GR)'] = stock[mpn]['grCurr']
            row['Price (GR)'] = stock[mpn]['grPrice']
            row['Curr (OPO)'] = stock[mpn]['opoCurr']
            row['Price (OPO)'] = stock[mpn]['opoPrice']

            let grPriceUSD = stock[mpn]['grPrice'] * exchange[stock[mpn]['grCurr']]
            let opoPriceUSD = stock[mpn]['opoPrice'] * exchange[stock[mpn]['opoCurr']]

            // loop and add quantity + calculate unit price
            let highestPrice = grPriceUSD > opoPriceUSD ? grPriceUSD : opoPriceUSD

            for (let j = 0; j < Object.keys(quantities).length; j++) {
                let quantity = Object.keys(quantities)[j]
                let markUp = quantities[quantity]['markUp']
                let handlingCharge = quantities[quantity]['handlingCharge']

                // Formula: [Unit Price + Unit price x (Mark Up% / 100)+Handling Charges] x QTY Break ]x ForEx / QTY Break
                let unitPrice = (((1 + markUp * 1.0 / 100) * highestPrice) * quantity + handlingCharge) / quantity
                row[quantity] = isNaN(unitPrice) ? '-' : unitPrice
            }
            workbookRows.push(row)
        }

        const ws = XLSX.utils.json_to_sheet(workbookRows, { header: myHeader })
        let wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const dd = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        FileSaver.saveAs(dd, 'Data.xlsx');

    }


    return (
        <div className={classes.root}>
            <span style={{ fontSize: '30px', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
                Price Comparison Compiler
            </span>
            <div className={classes.fileUploadContainer} style={{ flexDirection: 'row', width: '60%' }}>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>Stock Available</span>
                    <Input onChange={(event) => onFileChange(event, 1)} type="file" className={classes.fileUpload} />
                </div>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>Open Po Price List</span>
                    <Input onChange={(event) => onFileChange(event, 2)} type="file" className={classes.fileUpload} />
                </div>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>Goods Received Price List</span>
                    <Input onChange={(event) => onFileChange(event, 3)} type="file" className={classes.fileUpload} />
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <button onClick={() => downloadFile()} className={classes.download}>
                    Download
                </button>
            </div>
        </div>
    );
}

export default Compare;