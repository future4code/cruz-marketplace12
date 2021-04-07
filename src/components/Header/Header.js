import React from "react";
import styled from "styled-components";
import ImgHeader from "../../images/futureCar.png";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 70%;
  cursor: pointer;
`;

const Button = styled.div`
  font-family: "Nunito", sans-serif;
  background-color: #ff5c5c;
  opacity: 0.8;
  padding: 15px;
  margin-left: 10px;
  border: 0;
  border-radius: 10px;
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-items: center;
  cursor: pointer;
  transition: 300ms;
  :hover {
    opacity: 1;
  }
`;
export default class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        <Buttons>
          <Img
            onClick={() => {
              this.props.changeToPage("Home");
            }}
            src={ImgHeader}
          />
        </Buttons>
        <Buttons>
          <Button
            onClick={() => {
              this.props.changeToPage("Buy");
            }}
          >
            Compre um Carro
          </Button>
          <Button
            onClick={() => {
              this.props.changeToPage("Sell");
            }}
          >
            Venda um carro
          </Button>
        </Buttons>
      </HeaderDiv>
    );
  }
}
