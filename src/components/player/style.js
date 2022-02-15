import styled from "styled-components";

export const Player = styled.span`
    background-color: #8257E5;
    width: 32rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h2 {
        color: #fff;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 3rem;
`;

export const Main = styled.main`
    display: flex;
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    margin: 3rem;
`;

export const Podcast = styled.section`
    width: 19rem;
    height: 24rem;
    border: 1px dashed #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #8257E5 0%, #ffffff20 100%);
`;

export const Progress = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 2rem 0;
`;

export const Span = styled.span`
    color: #fff;
`;

export const Slider = styled.div`
    width: 220px;
    height: 2px;
    background-color: #ffffff40;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    button {
        margin: 0 .5rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        cursor: pointer;
    }
`;

export const ButtonPlay = styled.button`
    width: 50px;
    height: 50px;
    background: #ffffff20 !important;
    opacity: .8;
    border-radius: 10px;
`;