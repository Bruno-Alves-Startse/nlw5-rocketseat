import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: .6rem;
    }
    span {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    img {
        width: 40px;
        height: 40px;   
        object-fit: cover;
    }
    audio {
        width: 200px;
    }
`;