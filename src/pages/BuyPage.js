import React from "react";
import axios from "axios";
import styled from "styled-components";
import Cars from "../components/Cars";

export default class BuyPage extends React.Component {
  state = {
    cars: [],
    filterMin: "",
    filterMax: "",
    filterName: "",
  };

  componentDidMount() {
    this.getAllCars();
  }

  getAllCars = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars "
      )
      .then((res) => {
        console.log(res.data.cars);
        this.setState({ cars: res.data.cars });
      })
      .catch((err) => {
        console.log("Tente novamente");
        alert("Erro, tente novamente mais tarde!");
      });
  };

  onChangeFilterMin = (e) => {
    this.setState({ filterMin: e.target.value });
  };
  onChangeFilterMax = (e) => {
    this.setState({ filterMax: e.target.value });
  };
  onChangeFilterName = (e) => {
    this.setState({ filterName: e.target.value });
  };

  CleanFilter = () => {
    this.setState({
      filterMin: "",
      filterMax: "",
      filterName: "",
    });
  };

  FilterList = (min, max, name) => {
    let filterByValue;
    if (min || max) {
      // Se min e max estiverem vazios ou = 0. Caso contrário, pula o filtro por valor.
      filterByValue = this.state.cars.filter((car) => {
        if (min && !max) {
          // Se min não estiver vazio ou === 0 e max sim.
          return car.price >= min;
        } else if (!min && max) {
          // Se max não estiver vazio ou === 0 e min sim.
          return car.price <= max;
        } else if (min && max) {
          // Se min e max não estiverem vazios ou !== 0
          return car.price >= min && car.price <= max;
        }
      });
    } else {
      filterByValue = this.state.cars;
    }

    let filter;
    if (name) {
      // Se o campo de busca por nome não estiver vazio. Caso contrário, pula o filtro por texto.
      filter = filterByValue.filter((car) => {
        return car.name.toLowerCase().includes(`${name.toLowerCase()}`);
      });
    } else {
      filter = filterByValue;
    }
    return filter;
  };

  render() {
    let filterListCar = this.FilterList(
      this.state.filterMin,
      this.state.filterMax,
      this.state.filterName
    );

    return (
      <BuyContainer>
        <Cars
          onChangeFilterName={this.onChangeFilterName}
          onChangeFilterMin={this.onChangeFilterMin}
          onChangeFilterMax={this.onChangeFilterMax}
          CleanFilter={this.CleanFilter}
          filterName={this.state.filterName}
          filterMin={this.state.filterMin}
          filterMax={this.state.filterMax}
          cars={filterListCar}
          changeToPage={this.props.changeToPage}
        />
      </BuyContainer>
    );
  }
}
// CSS STYLED COMPONENTS

const BuyContainer = styled.div``;
