import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { useStyles } from '../styles'
import { Input } from '@material-ui/core';
import { excelDateToJSDate } from '../utils'


const Nexus = () => {

    const classes = useStyles()

    const [rowInfo, setRowInfo] = useState([])

    const [headers, setHeaders] = useState([])

    const readRaw = (data) => {
        let renderedData = XLSX.read(data, { type: 'binary' });
        const dataParse = XLSX.utils.sheet_to_json(renderedData.Sheets[renderedData.SheetNames[0]], { header: 1 });

        let headers = dataParse[0]
        headers.push("Committed Qty")
        headers.push("Commit ETA")
        headers.push("Balance Qty")
        headers.push("Balance Qty with Commit Qty ")
        setHeaders(headers)

        for (let i = 1; i < dataParse.length; i++) {
            // Filter JIT
            if (dataParse[i][5] == "JIT") {
                dataParse[i][3] = parseDate(dataParse[i][3])
                dataParse[i][12] = parseDate(dataParse[i][12])
                dataParse[i][15] = parseDate(dataParse[i][15])
                rowInfo.push(dataParse[i])
            }
        }
    }

    const parseDate = (input) => {
        if (typeof input === 'number') {
            return excelDateToJSDate(input)
        }
        let da = input.split('/')
        return new Date(da[2], da[0] - 1, da[1])
    }

    const onFileChange = (e, fileNo) => {
        e.preventDefault();
        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            if (fileNo === 1)
                readRaw(e.target.result)
            // else if (fileNo === 2)

            // else
        };
        reader.readAsBinaryString(f)
    }

    const downloadFile = () => {
        let wbData = []
        let i = 0
        while (i < rowInfo.length) {
            let MPN = rowInfo[i][4]
            while (i < rowInfo.length && MPN == rowInfo[i][4]) {
                let rowData = {}
                rowInfo[i].forEach((val, idx) => {
                    rowData[headers[idx]] = val
                })
                wbData.push(rowData)
                i++
            }
            // add 2 blank rows
            wbData.push({})
            wbData.push({})
        }

        const ws = XLSX.utils.json_to_sheet(wbData, { header: headers })
        ws['!ref'] = XLSX.utils.encode_range({
            s: { r: 0, c: 0 },
            e: { r: wbData.length + 1, c: 21 }
        })

        wbData.forEach((row, i) => {
            let er = i + 2
            let balanceQty = ''
            let balanceQtyCommit = ''
            if (Object.keys(wbData[i]).length != 0) {
                if (i == 0 || (Object.keys(wbData[i - 1]).length === 0 && Object.keys(wbData[i - 2]).length === 0)) {
                    balanceQty = `H${er}+I${er}+O${er}-N${er}`
                    balanceQtyCommit = `H${er}+I${er}+O${er}+R${er}-N${er}`
                } else {
                    balanceQty = `T${er - 1}-N${er}+O${er}`
                    balanceQtyCommit = `U${er - 1}-N${er}+O${er}+R${er}`
                }
                let balanceQtyCellRef = XLSX.utils.encode_cell({ r: er - 1, c: 19 })
                let balanceQtyCommitCellRef = XLSX.utils.encode_cell({ r: er - 1, c: 20 })

                ws[balanceQtyCellRef] = { f: balanceQty }
                ws[balanceQtyCommitCellRef] = { f: balanceQtyCommit }
            }
        })

        let wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const dd = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
        FileSaver.saveAs(dd, 'Data.xlsx');
    }


    return (
        <div className={classes.root}>
            <span className={classes.label} style={{ fontSize: '30px', marginBottom: '30px' }}>
                Upload Excel Files Here
            </span>
            <div className={classes.fileUploadContainer} style={{ flexDirection: 'row', width: '60%' }}>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>Raw File</span>
                    <Input onChange={(event) => onFileChange(event, 1)} type="file" className={classes.fileUpload} />
                </div>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>MPN List</span>
                    <Input onChange={(event) => onFileChange(event, 2)} type="file" className={classes.fileUpload} />
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

export default Nexus;