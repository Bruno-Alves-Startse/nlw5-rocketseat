/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { 
  useState 
} from 'react'
import {
  Player, 
  Header,
  Podcast,
  Footer,
  Progress,
  Span,
  Slider,
  Buttons, 
  ButtonPlay
} from "./style.module";

export default function player() {
  const [play, setPlay] = useState(false);

  return (
    <Player
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    > 
      <Header>
        <img src="/playing.svg" alt="tocando agora" />
        <h2>Tocando agora</h2>
      </Header>

      <Podcast> 
        <h2 
          style={"" ? {display: "flex", textAlign: "center"} : {display: "flex", textAlign: "center"}}
        >
          Selecione um <br /> podcast para ouvir
        </h2>
      </Podcast>

      <Footer>
        <Progress>
          <Span>00:00</Span>
          <Slider />
          <Span>00:00</Span>
        </Progress>

        <Buttons>
          <button type='button'>
            <img src="/shuffle.svg" alt="" />
          </button>

          <button type='button'>
            <img src="/play-previous.svg" alt="" />
          </button>

          <ButtonPlay onClick={() => setPlay(!play)} type='button'>
            <img src={play === true ? "/play.svg" : "/pause.svg"} alt="botao play" />
          </ButtonPlay>

          <button type='button'>
            <img src="/play-next.svg" alt="" />
          </button>
          <button type='button'>
            <img src="/repeat.svg" alt="" />
          </button>
        </Buttons>
      </Footer>
    </Player>
  );
};