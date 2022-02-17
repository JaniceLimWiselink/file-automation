import React, { useState } from 'react';
import { useStyles } from '../styles'
import { Backdrop, CircularProgress, Input } from '@material-ui/core';
import axios from 'axios';

const QuotationCompare = () => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false)
    const [newF, setNew] = useState(null)
    const [old, setOld] = useState(null)

    const uploadOld = (event) => {
        setOld(event.target.files[0])
    }

    const uploadNew = (event) => {
        setNew(event.target.files[0])
    }

    const ping = () => {
        axios.get('https://157.245.198.24/health')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const postRequest = async () => {
        setLoading(true)

        if (old == null || newF == null) {
            alert('ensure all files have ben uploaded before proceeding')
            setLoading(false)
            return
        }

        const formData = new FormData();
        formData.append("old", old);
        formData.append("new", newF);

        try {
            await axios.post("https://157.245.198.24/compile", formData,
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
            <span style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold' }}>
                Update new Quotation file
            </span>
            <span style={{ fontSize: '18px', margin: '30px 0px 30px 0px', textAlign: 'left', fontWeight: "normal" }}>
                Quotation File Type = Export quotation from system <br/>
                Output file will follow the template of New Quotation. <br/>
                It will add in details from the old file if the CPN & MPN matches. <br/>
            </span>
            <div className={classes.fileUploadContainer} style={{ flexDirection: 'row', width: '60%' }}>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>Old File</span>
                    <Input onChange={(event) => uploadOld(event)} type="file" className={classes.fileUpload} />
                </div>
                <div className={classes.fileUploadWrapper} style={{ width: '30%' }}>
                    <span className={classes.label}>New File</span>
                    <Input onChange={(event) => uploadNew(event)} type="file" className={classes.fileUpload} />
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

export default QuotationCompare;