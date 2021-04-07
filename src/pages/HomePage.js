import React from "react";
import styled from "styled-components";
import LogoImg from "../images/futureCar.png";

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentImg = styled.img`
  width: 400px;
  align-self: center;
`;

const Intro = styled.h3`
  display: flex;
  border-radius: 10px;
  padding: 7px;
  background-color: #e8ecef;
  height: 60px;
  width: 600px;
  text-align: center;
  align-self: center;
`;

export default class HomePage extends React.Component {
  render() {
    return (
      <MainDiv>
        <ContentImg src={LogoImg} />
        <Intro>
          A FutureCar e uma empresa que busca conectar vendedores e compradores
          de carros de forma simples e eficaz.
        </Intro>
      </MainDiv>
    );
  }
}
