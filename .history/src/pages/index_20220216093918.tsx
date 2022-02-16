/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import { api } from '../services/api';

import ptBR from "date-fns/locale/pt-BR";
import { 
  format,
  parseISO 
} from "date-fns";

import {
  Container,
  NewLaunch,
  Title,
  NewCard,
  NewLaunchCards,
  AllEpisodes,
  ContentCards,
  Card,
  Img,
  CardInformations,
  ButtonPlay
} from './home/style/style.module';
import { DurationToTimeString } from "../utils/DurationToTimeString";

type Episode = {
  title: string;
  id: string;
  members: string;
  publishedAt: string;
  duration: string;
  durationToString: string;
  thumbnail: string;
  url: string;
}

type AllEpisodes = {
  episodes: Episode[];
}

type LastEpisodes = {
  lastEpisodes: LastEpisodes;
}

export default function index(props: LastEpisodes) {
  return (
    <Container>
      <NewLaunch>
        <Title>
          Últimos lançamentos
        </Title>
        <NewLaunchCards>
          {props.lastEpisodesmap(episode =>
          {
            return(
              <NewCard 
                style={{
                  backgroundColor: '#fff',
                  borderRadius: "20px",
                  padding: 40,
                  display: 'flex',
                  position: 'relative',
                  gap: '10px',  
                  overflow: 'hidden',
                  zIndex: '1'
                }}
                key={key}
              >
                <Img
                  style={{borderRadius: "20px", objectFit: "cover"}}
                  src={item.thumbnail} 
                  alt="novos podcasts" 
                /> 
                <CardInformations
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <h2>{item.title}</h2>
                  <p>{item.publishedAt}</p>
                  <p>{item.durationToString}</p>
                </CardInformations>
              </NewCard>
            )
          })}
        </NewLaunchCards>
      </NewLaunch>

      <AllEpisodes>
        <Title>
          Todos os episódios
        </Title>
        <ContentCards>
          {props.episodes.map((item, key) => {
            return(
              <Card
                style={{
                  gap: '2px',
                  overflow: 'hidden',
                  background: '#fff',
                  padding: 20,
                }}
                key={key}
              >
                <span 
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    opacity: 1,
                  }}
                >
                  <Img
                    src={item.thumbnail} 
                    alt={item.id}
                  />
                  <h2>{item.title}</h2>
                </span>
                <span style={{textAlign: 'center'}}>{item.members}</span>
                <span style={{whiteSpace: 'nowrap'}}>{item.publishedAt}</span>
                <span style={{whiteSpace: 'nowrap'}}>{item.durationToString}</span>
                <span style={{opacity: 1}}>
                  <ButtonPlay>
                    <Img
                      style={{
                        width: '50px',
                        height: '50px',
                      }} 
                      src='/play-green.svg' 
                      alt="" 
                    />
                  </ButtonPlay>
                </span>
              </Card>
            )
          })}
        </ContentCards>
      </AllEpisodes>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 5,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes = data.map(episode => {
    return{
      id: episode.id,
      title: episode.title,
      description: episode.description,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationToString: DurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url,
      thumbnail: episode.thumbnail
    }
  })

  const lastEpisodes = episodes.slice(0, 2);
  const allEpisodes = episodes(lastEpisodes, episodes.length);

  return {
    props: {
      lastEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }
};