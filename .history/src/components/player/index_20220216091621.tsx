/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import * as S from "./style.module";

export default function player() {
  const [play, setPlay] = useState(false);

  return (
    <S.Player
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    > 
      <S.Header>
        <img src="/playing.svg" alt="tocando agora" />
        <h2>Tocando agora</h2>
      </S.Header>

      <S.Podcast>
        <h2 
          style={"" ? {display: "flex", textAlign: "center"} : {display: "flex", textAlign: "center"}}
        >
          Selecione um <br /> podcast para ouvir
        </h2>
      </S.Podcast>

      <S.Footer>
        <S.Progress>
          <S.Span>00:00</S.Span>
          <S.Slider />
          <S.Span>00:00</S.Span>
        </S.Progress>

        <S.Buttons>
          <button type='button'>
            <img src="/shuffle.svg" alt="" />
          </button>

          <button type='button'>
            <img src="/play-previous.svg" alt="" />
          </button>

          <S.ButtonPlay onClick={() => setPlay(!play)} type='button'>
            <img src={play === true ? "/play.svg" : "/pause.svg"} alt="botao play" />
          </S.ButtonPlay>

          <button type='button'>
            <img src="/play-next.svg" alt="" />
          </button>
          <button type='button'>
            <img src="/repeat.svg" alt="" />
          </button>
        </S.Buttons>
      </S.Footer>
    </S.Player>
  )
}
