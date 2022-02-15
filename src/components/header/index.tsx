/* eslint-disable @next/next/no-img-element */
import *  as S from "./style";

export default function header() {
    const currentDate = new Date().toLocaleDateString();

    return (
        <S.Header>
            <S.Logo src="/logo.svg" alt="logoPodcast" />

            <S.Text>O melhor para você ouvir, sempre</S.Text>

            <S.Date>{currentDate}</S.Date>
        </S.Header>
    );
};