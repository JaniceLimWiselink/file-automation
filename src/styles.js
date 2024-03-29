import { makeStyles, colors } from '@material-ui/core'

export const useStyles = makeStyles({
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
        marginTop: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    label: {
        fontWeight: 'bold',
        fontSize: '20px',
        paddingTop: '5px',
        paddingBottom: '5px',
        width: '100%',
        textAlign: 'left'
    },
    inputWrapper: {
        margin: '20px 0px'
    },
    input: {
        padding: '5px'
    },

    download: {
        backgroundColor: 'darkorange',
        color: 'white',
        width: '180px',
        height: '50px',
        borderRadius: '5px',
        fontSize: '1.1em',
        border: 'none',
        transition: '1s',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#ff6500',
            transition: '1s',
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