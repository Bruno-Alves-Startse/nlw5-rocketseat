import { styled } from "@material-ui/core";

export const Player = styled('div')({
    backgroundColor: '#8257E5',
    width: 'calc(100vw - 70vw)',
    height: '100vh',
    alignItems: 'center',
    position: 'relative',
    padding: '30px 0',

    '& h2': {
        color: '#fff',
    }
});

export const Header = styled('header')({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
});

export const Footer = styled('footer')({
    display: 'flex',
    flexDirection: 'column',
});

export const Podcast = styled('section')({
    width: '70%',
    height: '17rem',
    border: '1px dashed #fff',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #8257E5 0%, #ffffff20 100%)',

    '@media (max-width: ': {

    }
});

export const Progress = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '2rem 0',
});

export const Span = styled('span')({
    color: '#fff',
});

export const Slider = styled('div')({
    width: '60%',
    height: '2px',
    backgroundColor: '#ffffff40',
});

export const Buttons = styled('div')({
    display: 'flex',
    justifyContent: 'center',

    '& button': {
        margin: '0 .5rem',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
});

export const ButtonPlay = styled('button')({
    width: '50px',
    height: '50px',
    background: '#ffffff20 !important',
    opacity: .8,
    borderRadius: '10px',
});