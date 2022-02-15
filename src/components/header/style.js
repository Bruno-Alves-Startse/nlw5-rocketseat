import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding: 10px;
    height: 80px;
    background-color: #fff;
`;

export const Logo = styled.img`
    padding: 0 30px 0 0;
`;

export const Text = styled.p`
    padding: 5px 30px;
    border-left: .2px solid #000;
    opacity: .2;
`;

export const Date = styled.p`
    margin-left: auto;
    text-transform: capitalize;
    opacity: .2;
`;