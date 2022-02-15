/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import * as S from "./style";

export default function home() {
  const [epsodies, setEpsodies] = useState([]);

  useEffect(() =>
  {
    async function loadData() {
      const response = await fetch("http://localhost:8888/episodes");
      const data = await response.json();

      setEpsodies(data);
    };
    loadData();
  }, []);

  return (
    <div style={{padding: "0 20px"}}>
      <span style={{display: "flex", justifyContent: "space-between"}}>
        <h2>PODCAST</h2>
        <h2>INTEGRANTES</h2>
        <h2>DATA</h2>
        <h2>DURAÇÃO</h2>
      </span>
      {epsodies.map((item, key) =>
      {
        return(
          <S.Card key={key}>
            <span>
              <img src={item.thumbnail} alt="" />
              <p>{item.title}</p>
            </span>
            <p>{item.members}</p>
            <p>{item.published_at}</p>
            <button type="button">play</button>
          </S.Card>
        )
      })}
    </div>
  );
};