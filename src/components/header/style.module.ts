import { styled } from "@material-ui/core";

export const Header = styled('header')(() => ({
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    height: '80px',
    backgroundColor: '#fff',
    position: 'relative',
}));

export const Logo = styled('img')(() => ({
    padding: '0 30px 0 0',

    '@media (max-width: 650px)': {
        padding: '0 5px 0 0',
        width: '120px'
    }
}));

export const Text = styled('p')(() => ({
    padding: '5px 30px',
    borderLeft: '.2px solid #000',
    opacity: .2,
    maxWidth: '70%',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

    '@media (max-width: 650px)': {
        display: 'none'
    }
}));

export const DateString = styled('p')(() => ({
    marginLeft: 'auto',
    textTransform: 'capitalize',    
    opacity: .2,

    '@media (max-width: 650px)': {
        fontSize: '.9rem'
    }
}));