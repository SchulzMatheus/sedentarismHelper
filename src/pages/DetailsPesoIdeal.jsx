/* eslint-disable max-len */
import React, { Component } from 'react';
import Header from './Header';
import { getUser } from '../services/userApi';
import Loading from '../Components/loading';
import '../stylish/details.css';
import pesoideal from '../images/pesoideal-removebg-preview.png';
import table from '../images/índice.jpeg';

export default class DetailsPesoIdeal extends Component {
  state = {
    x: {},
    loading: false,
  };

  async componentDidMount() {
    console.log(getUser());
    this.setState({ loading: true });
    const y = await getUser();
    this.setState({ x: y, loading: false, aux: y.userAttr3 ** y.userAttr3 });
  }

  render() {
    const { x, loading, aux } = this.state;
    const imc = x.userAttr2 / aux;
    const imcFormat = imc.toFixed(2);
    return (
      loading ? (
        <div>
          <Header />
          <Loading />
        </div>
      ) : (
        <div className="main-content">
          <Header />
          <div className="text-content-right">
            <div>
              <img src={ pesoideal } alt="Avatar acima do peso" className="avatar" />
            </div>
            <div className="text">
              <h2>{`Olá ${x.userName} seu imc é ${imcFormat}`}</h2>
              <p>Seu peso está na faixa normal, o que é ótimo. Pesquisas mostram que ter um IMC normal pode reduzir as chances de apresentar problemas de saúde sérios, como diabetes tipo 2, doenças do coração, derrames e alguns tipos de câncer.</p>
              <p>Mas nem todas pessoas com IMC nesta faixa estão livres dessas doenças.Outros fatores que podem aumentar os riscos dessas enfermidades são fumar, pressão e colesterol altos.</p>
              <p>Somos mais propensos a ganhar peso quando envelhecemos, então para manter um peso normal pode ser necessário fazer algumas mudanças na sua dieta ou em sua rotina de atividades com o passar dos anos.</p>
              <img className="tabela" src={ table } alt="" />
              <br />
            </div>
          </div>
          <div className="embed-responsive embed-responsive-16by9 video">
            <h2>videos here</h2>
          </div>
        </div>
      )
    );
  }
}

DetailsPesoIdeal.propTypes = {}.isRequired;
