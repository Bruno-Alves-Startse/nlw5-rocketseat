import { styled } from "@material-ui/core";

export const Container = styled('div')({
    width: '100%',
    height: '60%',
    padding: '10px',
    overflowY: 'auto',

    '& h2': {
        fontSize: '1.3rem',
    },

    '& p': {
        fontSize: '1rem',
        opacity: .5
    }
});

export const NewLaunch = styled('div')({
});

export const Title = styled('h1')({

});

export const NewLaunchCards = styled('div')({
    display: 'flex',
    width: '100%',
    
    '@media (max-width: 650px)': {
        flexWrap: 'wrap',
    }
});

export const NewCard = styled('div')({
    width: '50%',
    height: '175px',
    margin: '20px 30px 20px 0',

    '@media (max-width: 650px)': {
        flexWrap: 'wrap',
        height: 'auto',
    },
});

export const Img = styled('img')({
    width: '100px',
    height: '100%',
});

export const AllEpisodes = styled('div')({

});

export const ContentCards = styled('div')({

});

export const Card = styled('div')({
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '15px 0',
    borderRadius: '10px',

    '& span': {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '50px',
        opacity: .3,
    },

    '& span:nth-child(1)': {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto auto 0 0',
        maxWidth: '300px',
        gap: '10px',
    },
});

export const CardInformations = styled('span')({
    width: '90%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

export const ButtonPlay = styled('button')({
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
});