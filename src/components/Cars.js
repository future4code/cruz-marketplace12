import React from "react";
import CarsCard from "./CarsCard";
import styled from "styled-components";

const CarsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 2fr 1fr;
  background-image: linear-gradient(200deg, #e8ecef, white);
  height: 66vh;
  padding-right: 1%;
  padding-top: 1%;
`;

const GridCardsContainer = styled.div`
  grid-area: 1/2/3/3;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2vw;
  overflow-y: auto;
  overflow-x: hidden;
`;

const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
`;

const FilterContainer = styled.div`
  grid-area: 1/1/2/2;
  padding: 0 4%;
  background-color: #e8ecef;
  color: #36414f;
  border-radius: 20px;
  margin: 0 4%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-content: center;

  h3 {
    align-self: center;
    margin-block-start: 16px;
    margin-block-end: 16px;
  }

  select {
    align-self: center;
    border-radius: 8px;
    height: 24px;
  }
`;

const InputMinMax = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4%;
`;

const InputSearch = styled.input`
  border-radius: 10px;
  height: 20px;
  width: 90%;
  margin: 8px 0;
`;

const BtnFilterClear = styled.button`
  background-color: #36414f;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  opacity: 0.9;
  border: 0;
  border-radius: 12px;
  color: white;
  height: 30px;
  margin: 4%;
  align-self: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 300ms;
  :hover {
    opacity: 1;
  }
`;

const SearchByName = styled.input`
  border-radius: 10px;
  height: 20px;
  margin: 8px 0;
`;

class Cars extends React.Component {
  state = {
    order: "Preco",
  };

  onChangeFilter = (event) => {
    this.setState({ order: event.target.value });
  };

  Ordination = () => {
    const ordination = this.props.cars.sort((x, y) =>
      this.state.order === "Preco" ? x.price - y.price : x.shipping - y.shipping
    );
    return ordination;
  };

  render() {
    let orderedList = this.Ordination();
    return (
      <CarsContainer>
        <FilterContainer>
          <h3>Filtros</h3>
          <LabelFilter>Buscar por nome:</LabelFilter>
          <SearchByName
            type="text"
            value={this.props.filterName}
            onChange={this.props.onChangeFilterName}
          />
          <InputMinMax>
            <LabelFilter>
              Valor mínimo:
              <InputSearch
                type="number"
                value={this.props.filterMin}
                onChange={this.props.onChangeFilterMin}
              />
            </LabelFilter>
            <LabelFilter>
              Valor máximo:
              <InputSearch
                type="number"
                value={this.props.filterMax}
                onChange={this.props.onChangeFilterMax}
              />
            </LabelFilter>
          </InputMinMax>
          <br />
          <BtnFilterClear onClick={this.props.CleanFilter}>
            Limpar Filtro
          </BtnFilterClear>
          <h3>Ordenar por:</h3>
          <select onChange={this.onChangeFilter}>
            <option value="Preco">Preço </option>
            <option value="Prazo de Entrega">Prazo de Entrega </option>
          </select>
        </FilterContainer>
        <GridCardsContainer>
          {orderedList.map((car) => {
            return (
              <CarsCard changeToPage={this.props.changeToPage} car={car} />
            );
          })}
        </GridCardsContainer>
      </CarsContainer>
    );
  }
}

export default Cars;
