import styled from "styled-components";
import React from "react";

const FooterDiv = styled.footer`
  background-color: #36414f;
  width: 100vw;
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
  font-family: "nunito", sans-serif;
`;
const FooterRedes = styled.div`
  width: 33.3%;
  display: flex;
  justify-content: space-around;
  text-decoration: none;
`;
const FooterEmail = styled.p`
  width: 33.3%;
  display: flex;
  justify-content: center;
`;
const FooterNumero = styled.p`
  width: 33.4%;
  display: flex;
  justify-content: center;
`;
const LinksFooter = styled.a`
  text-decoration: none;
  color: white;
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterDiv>
        <FooterRedes>
          <LinksFooter href="https://www.facebook.com/">Facebook</LinksFooter>

          <LinksFooter href="https://twitter.com/">Twitter</LinksFooter>

          <LinksFooter href="https://www.instagram.com/">Instagram</LinksFooter>
        </FooterRedes>

        <FooterEmail>Contato@Futurecar.com.br</FooterEmail>
        <FooterNumero>(11) 9 98324-2453</FooterNumero>
      </FooterDiv>
    );
  }
}
