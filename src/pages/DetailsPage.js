import React from "react";
import styled from "styled-components";
import axios from "axios";
import TheBestCar from "../images/carro2.png";

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const DetailsContainer = styled.div`
  padding: 0 4%;
  background-color: #f5f6f7;
  color: #36414f;
  border-radius: 20px;
  margin: 0 4%;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  height: 30vh;
  width: 30vh;
`;

const BtnDelete = styled.button`
  background-color: #36414f;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  opacity: 0.9;
  border: 0;
  border-radius: 12px;
  color: white;
  height: 30px;
  margin: 2%;
  align-self: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 300ms;
  :hover {
    opacity: 1;
  }
`;
export default class DetailsPage extends React.Component {
  state = {
    Car: this.props.car,
    InputName: "",
    InputEmail: "",
    InputPhone: "",
    TextAreaMessage: "",
  };

  changeName = (e) => {
    this.setState({ InputName: e.target.value });
  };
  changeEmail = (e) => {
    this.setState({ InputEmail: e.target.value });
  };
  changePhone = (e) => {
    this.setState({ InputPhone: e.target.value });
  };
  changeMessage = (e) => {
    this.setState({ TextAreaMessage: e.target.value });
  };

  SendMessage = () => {
    if (
      this.state.InputName &&
      this.state.InputEmail &&
      this.state.InputPhone &&
      this.state.TextAreaMessage
    ) {
      alert("Mensagem enviada.");
      this.setState({
        InputName: "",
        InputEmail: "",
        InputPhone: "",
        TextAreaMessage: "",
      });
    } else {
      alert("Algum campo em branco!");
    }
  };

  deleteCar = (id) => {
    if (window.confirm("Deseja mesmo deletar este anúncio?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars/${id}`
        )
        .then((res) => {
          console.log(res);
          alert("Anúncio deletado com sucesso!");
          this.props.changeToPage("Buy");
        })
        .catch((err) => {
          console.log(err);
          alert("Ocorreu um erro ao tentar deletar o anúncio");
        });
    }
  };

  render() {
    return (
      <div>
        <Details>
          <div>
            <img width="80%" src={this.state.Car.image}></img>
            <p>
              <strong>Nome: </strong>
              {this.state.Car.name}
            </p>
          </div>
          <DetailsContainer>
            <p>
              <strong>Preço: </strong>R$ {this.state.Car.price},00
            </p>
            <p>
              <strong>Descrição: </strong>
              {this.state.Car.description}
            </p>
            <p>
              <strong>Prazo de Entrega (dias):</strong>{" "}
              {this.state.Car.shipping}
            </p>
            <p>
              <strong>Forma de Pagamento: </strong>
              {this.state.Car.paymentMethod}
            </p>
            <BtnDelete onClick={() => this.deleteCar(this.state.Car.id)}>
              Deletar
            </BtnDelete>
          </DetailsContainer>
          <div>
            <br></br>
            <div>
              Nome:
              <input value={this.state.InputName} onChange={this.changeName} />
            </div>
            <div>
              E-mail:
              <input
                value={this.state.InputEmail}
                onChange={this.changeEmail}
              />
            </div>
            <div>
              Telefone:
              <input
                type="number"
                value={this.state.InputPhone}
                onChange={this.changePhone}
              />
            </div>
            <div>
              Deixe sua mensagem:
              <textarea
                value={this.state.TextAreaMessage}
                onChange={this.changeMessage}
                rows="7"
                cols="60"
              />
              <br />
              <button onClick={this.SendMessage}>Enviar</button>
            </div>
          </div>
        </Details>
        <button
          onClick={() => {
            this.props.changeToPage("Buy");
          }}
        >
          Voltar
        </button>
      </div>
    );
  }
}
