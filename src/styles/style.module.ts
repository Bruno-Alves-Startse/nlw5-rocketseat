import { styled } from "@material-ui/core";

export const Container = styled('section')(() => ({
    padding: '20px',
    overflowY: 'scroll',
    height: '90vh',

    '&::-webkit-scrollbar': {
        width: '8px',
    },
    
    '&::-webkit-scrollbar-thumb': {
        background: '#8257E599',
        borderRadius: '10px',
    },
}));

export const ContentNewLaunch = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export const ContentAllEpisodes = styled('div')(() => ({

}));

export const Title = styled('h1')(() => ({
    margin: '20px 0'
}));

export const TitleCard = styled('h2')(() => ({
    fontSize: '1.1rem',
    textAlign: 'center',
}));

export const CardNewEpisode = styled('div')(() => ({
    width: '300px',
    height: '450px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '20px',
    gap: '30px',
    overflow: 'hidden',

    '& span': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        gap: '10px',
    },

    '& p': {
        fontSize: '.8rem',
        opacity: '.5',
    },

    '& p:last-child': {
        fontSize: '.9rem',
        fontWeight: 'bold',
    }
}));

export const CardEpisode = styled('div')(() => ({
    width: '100%',
    height: '150px',
    background: '#fff',
    padding: '10px',
    margin: '20px 0',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& p': {
        opacity: '.5',
    }
}));

export const RenderNewLaunchs = styled('div')(() => ({
    display: 'flex',
    gap: '25px',
    width: '100%',

    '@media (max-width: 850px)': {
        flexDirection: 'column',   
    }
}));

export const RenderAllEpisodes = styled('div')(() => ({

    '& td': {
        width: '100%',
        maxWidth: '90%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}));