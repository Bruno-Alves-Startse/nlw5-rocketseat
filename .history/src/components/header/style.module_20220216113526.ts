import { styled } from "@material-ui/core";

export const Header = styled('header')({
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    height: '80px',
    backgroundColor: '#fff',
    position: 'relative', 
});

export const Logo = styled('img')({
    padding: '0 30px 0 0',

    '@media (max-width: 650px)': {
        padding: '0 5px 0 0',
        width: '30px',
        height
    },
});

export const Text = styled('p')({
    padding: '5px 30px',
    borderLeft: '.2px solid #000',
    opacity: .2,
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '50%',

    '@media (max-width: 650px)': {
        padding: '5px'
    },
});

export const DateString = styled('p')({
    marginLeft: 'auto',
    textTransform: 'capitalize',
    opacity: .2,
});