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
import Image from "next/image";

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
  lastEpisodes: Episode[];
  allEpisodes: Episode[];
}

export default function index({ lastEpisodes, allEpisodes }: AllEpisodes) {
  return (
    <Container>
      <NewLaunch>
        <Title>
          Últimos lançamentos
        </Title>
        <NewLaunchCards>
          {lastEpisodes.map(episode =>
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
                key={episode.id}
              >
                <Img
                  style={{borderRadius: "20px", objectFit: "cover"}}
                  src={episode.thumbnail} 
                  alt="novos podcasts" 
                /> 
                <CardInformations
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <h2>{episode.title}</h2>
                  <p>{episode.publishedAt}</p>
                  <p>{episode.durationToString}</p>
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
          {allEpisodes.map(episode => {
            return(
              <Card
                style={{
                  gap: '2px',
                  overflow: 'hidden',
                  background: '#fff',
                  padding: 20,
                }}
                key={episode.id}
              >
                <span 
                  style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    opacity: 1,
                  }}
                >
                  <Image
                    width={300}
                    height={300}
                    quality={50}
                    src={episode.thumbnail} 
                    alt={episode.id}
                  />
                  <h2>{episode.title}</h2>
                </span>
                <span style={{textAlign: 'center'}}>{episode.members}</span>
                <span style={{whiteSpace: 'nowrap'}}>{episode.publishedAt}</span>
                <span style={{whiteSpace: 'nowrap'}}>{episode.durationToString}</span>
                <span style={{opacity: 1}}>
                  <ButtonPlay>
                    <Image
                      width={}
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
  const allEpisodes = episodes.slice(lastEpisodes, episodes.length);

  return {
    props: {
      lastEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }
};