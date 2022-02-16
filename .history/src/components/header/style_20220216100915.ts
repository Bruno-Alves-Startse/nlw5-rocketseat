import { styled } from "@material-ui/core";

export const Header = styled('header')({
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    height: '80px',
    backgroundColor: '#fff',
    position: 'relative',
    width: '70%',
    top: 0,
    left: 0,
});

export const Logo = styled('img')({
    padding: '0 30px 0 0',
});

export const Text = styled('p')({
    padding: '5px 30px',
    borderLeft: '.2px solid #000',
    opacity: .2,
});

export const DateString = styled('p')({
    marginLeft: 'auto',
    textTransform: 'capitalize',
    opacity: .2,
});