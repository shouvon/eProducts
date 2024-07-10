import { styled } from '@mui/material/styles';

export const LoginStyle = styled('div')(() => ({
    ".auth-head": {
        marginBottom: '30px',
        width: '100%',
        'h1': {
            fontSize: '3.3rem',
            fontWeight: '600',
        },
        'p': {
            fontSize: '2rem',
            fontWeight: '400',
            color: "#0066cc",
            textAlign:'center'
        },

    },
    ".login-button": {
        marginTop: '60px',

        'button': {
            height: '56px',
            fontSize: '1.8rem'
        },

        "@media(max-width:1199px)": {
            marginTop: '20px',
        }
    },
    ".MuiFormControlLabel-label": {
        fontSize: '1.6rem'
    }
}));
