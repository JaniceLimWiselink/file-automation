import { makeStyles } from "@mui/styles";

export const styles = (theme) => ({
    grow: {
        flexGrow: 1,
    },
    linkContainer: {
        display: 'flex'
    },
    link: {
        margin: '5px',
        padding: '10px 20px 10px 20px',
        backgroundColor: '#f8f8f8',
        color: '#434343',
        textDecoration: 'none',
        borderRadius: '5px',
        transition: '0.5s',
        textTransform: 'uppercase',
        fontSize: '1em',
        fontWeight: 'bold',

        '&:hover': {
            backgroundColor: '#d5d5d5',
            transition: '0.5s',
        },
    },

    root: {
        padding: "0em 1em", 
        fontFamily: "AirbnbCereal-Bold",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    label: {
        paddingTop: '5px',
        paddingBottom: '5px',
        width: '100%',
        textAlign: 'left',
        fontSize: '1em',
    },
    inputWrapper: {
        margin: '20px 0px'
    },
    input: {
        padding: '5px'
    },

    download: {
        padding: '15px 30px',
        borderRadius: '8px',
        fontSize: '1em',

        backgroundColor: 'darkorange',
        fontFamily: 'AirbnbCereal-Medium',

        color: 'white',
        border: 'none',
        transition: '0.5s',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#ff6500',
            transition: '0.5s',
            cursor: 'pointer'
        },
    },

    fileUploadContainer: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
    },
    fileUploadWrapper: {
        flex: 1,
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '10px',
    },
    fileUpload: {
        height: '60px',
        backgroundColor: 'white',
        border: 'none',
        flex: 1,
        margin: '10px'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

// Create a useStyles hook for easy import
const useStyles = makeStyles(styles);
export default useStyles;
