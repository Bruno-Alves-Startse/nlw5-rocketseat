import { styled } from '@material-ui/core';

export const Wrapper = styled('div')(() => ({
    display: 'flex',

    '& main': {
        
    }

    '@media (max-width: 800px)': {
        '& main': {
            width: '50vw'
        } 
    },

    '@media (max-width: 550px)': {
        flexDirection: 'column',
    },
}));