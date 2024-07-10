import { styled } from '@mui/material/styles';

export const LayoutBox = styled('section')(() => ({
    ".auth-container": {
        height: '100vh',

       

        '.right': {
            height: '100%',
            padding: '0 103px',
            '.app-logo': {
                marginBottom: '40px',
                width: '263px',
                height: '45px'
            },
            "@media(max-width:1199px)": {
                padding: '0 50px',
            },

            "@media(max-width:499px)": {
                padding: '0 20px',
            }
        },

        "@media(max-width:799px)": {
            ".left-muiGrid": {
                display: 'none'
            },

            ".right-muiGrid": {
                maxWidth: '100%',
                flexBasis: '100%'
            }
        }
    },


}));
