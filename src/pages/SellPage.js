import axios from "axios";
import React from "react";
import styled from "styled-components";

const FlexColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GridColumn1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 2vw;
`;

const GridColumn2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2vw;
`;

const InicioSellPage = styled.div`
  color: #4d6f80;
`;

const Myh2 = styled.h2`
  font-size: 18px;
`;

const HrSellPage = styled.hr`
  color: #4d6f80;
  height: 2px;
  background-color: #4d6f80;
  opacity: 0.3;
`;

const DivMasterSellPage = styled.div`
  width: 50vw;
  margin: auto;
  overflow: auto;
`;

const InputSellPage = styled.input`
  border: 1px solid gray;
  height: 24px;
  border-radius: 12px;
  outline: none;
`;

const InputSellPage2 = styled.textarea`
  height: 10vh;
  border-radius: 12px;
  outline: none;
`;

const DivSellPage = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "nunito", sans-serif;
  font-weight: bold;
  color: #545454;
  font-size: 14px;
  margin: 8px 0;
`;

const SelectSellPag = styled.select`
  border: 1px solid gray;
  height: 28px;
  border-radius: 12px;
  outline: none;
`;

const ButtonSellPage = styled.button`
  background-color: #ff7d7d;
  font-family: "nunito", sans-serif;
  border-radius: 10px;
  border-color: transparent;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  color: white;
  transition: 300ms;
  margin: 8px 0;
  cursor: pointer;
  :hover {
    background-color: #ff5c5c;
  }
`;

export default class SellPage extends React.Component {
  state = {
    name: "",
    description: "",
    price: null,
    paymentMethod: "",
    shipping: null,
    image: "",
    model: "",
    year: "",
    km: null,
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleDescription = (e) => {
    this.setState({ description: e.target.value });
  };
  handlePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  handlePaymentMethod = (e) => {
    this.setState({ paymentMethod: e.target.value });
  };

  handleShipping = (e) => {
    this.setState({ shipping: e.target.value });
  };

  handleImage = (e) => {
    this.setState({ image: e.target.value });
  };

  handleModel = (e) => {
    this.setState({ model: e.target.value });
  };

  handleYear = (e) => {
    this.setState({ year: e.target.value });
  };

  handleKm = (e) => {
    this.setState({ km: e.target.value });
  };

  createCar = () => {
    const body = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      paymentMethod: this.state.paymentMethod,
      shipping: this.state.shipping,
      image: this.state.image,
      model: this.state.model,
      year: this.state.year,
      km: this.state.km,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarTwo/cars",
        body
      )
      .then((res) => {
        alert("Parabéns, seu carro foi anunciado com sucesso!");
        console.log(res);
        this.setState({
          name: "",
          description: "",
          price: null,
          paymentMethod: "",
          shipping: null,
          image: "",
          model: "",
          year: "",
          km: null,
        });
      })
      .catch((err) => {
        alert(
          "Ocorreu um erro ao anunciar seu carro, verifique se todas as informações foram preenchidas corretamente"
        );
        console.log(err);
      });
  };

  render() {
    return (
      <DivMasterSellPage>
        <InicioSellPage>
          <Myh2>Anuncie seu Carro</Myh2>
          <HrSellPage />
        </InicioSellPage>
        <GridColumn1>
          <DivSellPage>
            Marca
            <InputSellPage onChange={this.handleName} value={this.state.name} />
          </DivSellPage>
          <DivSellPage>
            Modelo
            <InputSellPage
              onChange={this.handleModel}
              value={this.state.model}
            />
          </DivSellPage>
          <DivSellPage>
            Ano
            <SelectSellPag onChange={this.handleYear} value={this.state.year}>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
              <option value="1970">1970</option>
            </SelectSellPag>
          </DivSellPage>
        </GridColumn1>
        <GridColumn2>
          <DivSellPage>
            Qual é a quilometragem?
            <InputSellPage
              type="number"
              onChange={this.handleKm}
              value={this.state.km}
              placeholder="Ex: 50.000 km"
            ></InputSellPage>
          </DivSellPage>
          <DivSellPage>
            Url da Imagem
            <InputSellPage
              onChange={this.handleImage}
              value={this.state.image}
            />
          </DivSellPage>
        </GridColumn2>
        <DivSellPage>
          Descrição
          <InputSellPage2
            placeholder="Informe dados como combustível, direção, potência do motor, se aceita troca, estado financeiro (ex: IPVA pago), único dono, etc."
            onChange={this.handleDescription}
            value={this.state.description}
          />
        </DivSellPage>
        <FlexColumn>
          <DivSellPage>
            Metodo de Pagamento
            <SelectSellPag
              onChange={this.handlePaymentMethod}
              value={this.state.paymentMethod}
            >
              <option value="">Selecione</option>
              <option value="Financiamento">Financiamento</option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de Crédito">Cartão de Crédito</option>
              <option value="Cartão de Débito">Cartão de Débito</option>
              <option value="Boleto Bancário">Boleto Bancário</option>
              <option value="Pix">Pix</option>
            </SelectSellPag>
          </DivSellPage>
          <DivSellPage>
            Preço
            <InputSellPage
              type="number"
              onChange={this.handlePrice}
              value={this.state.price}
            />
          </DivSellPage>

          <DivSellPage>
            Prazo de Entrega
            <InputSellPage
              type="number"
              onChange={this.handleShipping}
              value={this.state.shipping}
            />
          </DivSellPage>
        </FlexColumn>
        <ButtonSellPage onClick={this.createCar}>Anunciar</ButtonSellPage>
      </DivMasterSellPage>
    );
  }
}
