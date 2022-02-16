import { styled } from '@material-ui/core';

export const Wrapper = styled('div')(() => ({
    display: 'flex',

    '& main': {
        width: '70vw',
    },

    '@media (max-width: 800px)': {
        '& main': {
            width: '60vw'
        } 
    },

    '@media (max-width: 550px)': {
        flexDirection: 'column',

        ''
    },
}));