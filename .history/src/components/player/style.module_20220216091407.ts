import { styled } from "@material-ui/core";

export const Player = styled('span')({
    backgroundColor: '#8257E5',
    width: '30%',
    height: '100%',
    display: 'flex',
    flexdirection: 'column',
    justifycontent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    right: 0,
    top: 0, 

    '& h2': {
        color: '#fff',
    }
});

export const Header = styled('header')({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    margin: '3rem',
});

export const Main = styled('main')({
    display: 'flex',
    flex-d
});

export const Footer = styled('footer')({
    display: 'flex',
    flexDirection: 'column',
    margin: '3rem',
});

export const Podcast = styled('section')({
    width: '19rem',
    height: '24rem',
    border: '1px dashed #fff',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to bottom, #8257E5 0%, #ffffff20 100%)',
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
    width: '220px',
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