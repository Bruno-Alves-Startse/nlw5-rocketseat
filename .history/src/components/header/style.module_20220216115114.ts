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
});

export const Text = styled('p')({
    padding: '5px 30px',
    borderLeft: '.2px solid #000',
    opacity: .2,
    textAlign: 'center',
});

export const DateString = styled('p')({
    marginLeft: 'auto',
    textTransform: 'capitalize',
    opacity: .2,
});