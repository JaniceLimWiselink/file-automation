import React, { useState } from 'react';
import { styles } from '../styles';
import useClasses from '../useClasses';
import { Backdrop, CircularProgress, Input } from '@mui/material';
import axios from 'axios';

const QuotationCompile = () => {
    const classes = useClasses(styles)
    const [loading, setLoading] = useState(false)
    const [inputFile, setInputFile] = useState(null)
    const [priceList, setPriceList] = useState(null)

    const uploadInput = (event) => {
        setInputFile(event.target.files[0])
    }

    const uploadPricelist = (event) => {
        setPriceList(event.target.files[0])
    }


    const postRequest = async () => {
        setLoading(true)

        if (inputFile == null || priceList == null) {
            alert('ensure all files have ben uploaded before proceeding')
            setLoading(false)
            return
        }

        const formData = new FormData();
        formData.append("file", inputFile);
        formData.append("price_list", priceList);

        try {
            await axios.post("https://157.245.198.24/update", formData,
                {
                    headers:
                    {
                        'Content-Disposition': "attachment; filename=output.xlsx",
                        'Content-Type': 'multipart/form-data'
                    },
                    responseType: 'arraybuffer',
                }
            ).then(res => {
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'output.xlsx');
                document.body.appendChild(link);
                link.click();
            }).catch(err => {
                console.log(err)
                alert(err)
            });
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className={classes.root}>
            <span style={{ fontSize: '30px', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
                Input Supplier Price
            </span>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <h3>Your Uploaded File <span style={{ fontWeight: 'bold', color: 'red', fontSize: '20px' }}>MUST</span> follow the following format: </h3>
                <img alt="Sample Format" src={require('../assets/Format.png')} width={"80%"} style={{ borderRadius: "10px" }} />
            </div>
            <div className={classes.fileUploadContainer} style={{ flexDirection: 'row', width: '60%' }}>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>Input File</span>
                    <Input onChange={(event) => uploadInput(event)} type="file" className={classes.fileUpload} />
                </div>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>Price List</span>
                    <Input onChange={(event) => uploadPricelist(event)} type="file" className={classes.fileUpload} />
                </div>
            </div>
            <div style={{ marginTop: '50px' }}>
                <button onClick={() => postRequest()} className={classes.download}>
                    Compile
                </button>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
                style={{ position: 'absolute', zIndex: 10 }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}

export default QuotationCompile;