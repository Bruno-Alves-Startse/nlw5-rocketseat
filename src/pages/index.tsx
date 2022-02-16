/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";

import { api } from '../services/api';
import { DurationToTimeString } from "../utils/DurationToTimeString";

import ptBR from "date-fns/locale/pt-BR";
import { 
  format,
  parseISO 
} from "date-fns";
import {
  Container,
  ContentNewLaunch,
  ContentAllEpisodes,
  Title,
  CardNewEpisode,
  CardEpisode,
  RenderNewLaunchs,
  RenderAllEpisodes,
  TitleCard
} from "../styles/style.module";

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
      <ContentNewLaunch>
        <Title>Novos lançamentos</Title>
        <RenderNewLaunchs>
          {lastEpisodes.map(episode => {
            return(
              <CardNewEpisode key={episode.id}>
                <img 
                  style={{
                    width: '150px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                  src={episode.thumbnail} 
                  alt={episode.title} 
                />  
                <span>
                  <TitleCard>{episode.title}</TitleCard>
                  <p>{episode.members}</p>
                  <p>{episode.durationToString} | {episode.publishedAt}</p>
                </span>
              </CardNewEpisode>
            )
          })}
        </RenderNewLaunchs>
      </ContentNewLaunch>

      <ContentAllEpisodes>
        <Title>Veja todos os nossos episódios</Title>
        <RenderAllEpisodes>
              {allEpisodes.map(episode => {
                return(
                  <CardEpisode key={episode.id}>
                    <img 
                      style={{
                        width: '40px',
                        height: '40px',
                        objectFit: 'cover',
                      }}
                      src={episode.thumbnail} 
                      alt={episode.title} 
                    />
                    <TitleCard 
                      style={{
                        maxWidth: '70%',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {episode.title}
                    </TitleCard>
                    <p>{episode.durationToString}</p>
                    <p>{episode.publishedAt}</p>
                    <button type="button">
                      <img src='/play-green.svg' alt="button play" />
                    </button>
                  </CardEpisode>
                )
              })}
        </RenderAllEpisodes>
      </ContentAllEpisodes>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
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
  const allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      lastEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }
};