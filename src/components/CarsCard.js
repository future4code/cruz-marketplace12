import React from "react";
import styled from "styled-components";
import Car from "../images/carro.jpg";

const CardContainer = styled.div`
  height: 28vh;
  display: flex;
  color: black;
  margin: 0;
  justify-content: space-between;
  flex-direction: column;
  background-color: white;
  background-size: cover;
  cursor: pointer;
`;

const CardCar = styled.img`
  height: 20vh;
  object-fit: cover;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 80px;
  border-radius: 10px;
`;

const InfoCard = styled.p`
  font-family: "nunito", sans-serif;
  display: flex;
  font-weight: 700;
  margin: 4px 6px 0 6px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #ffffff99;
`;

const PriceLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const DetailsBtn = styled.button`
  background-color: #ff5c5c99;
  color: white;
  border: 0;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #ff5c5c;
  }
`;

class CarCard extends React.Component {
  render() {
    const car = this.props.car;
    return (
      <CardContainer key={car.id}>
        <PriceLine>
          <InfoCard>{car.name}</InfoCard>
        </PriceLine>
        <CardCar src={car.image} />
        <PriceLine>
          <InfoCard>R$ {car.price},00</InfoCard>
        </PriceLine>

        <DetailsBtn
          type="BtnScreen"
          onClick={() => {
            this.props.changeToPage("Details", car);
          }}
        >
          Ver mais
        </DetailsBtn>
      </CardContainer>
    );
  }
}

export default CarCard;
