/* eslint-disable max-len */
import React, { Component } from 'react';
import Header from './Header';
import { getUser } from '../services/userApi';
import Loading from '../Components/loading';
import '../stylish/details.css';
import imgAcimaDoPeso from '../images/semFundoObSob.png';
import table from '../images/índice.jpeg';

export default class DetailsAcimaDoPeso extends Component {
  state = {
    x: {},
    loading: false,
  };

  async componentDidMount() {
    console.log(getUser());
    this.setState({ loading: true });
    const y = await getUser();
    this.setState({ x: y, loading: false });
  }

  render() {
    const { x, loading } = this.state;
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
              <img src={ imgAcimaDoPeso } alt="Avatar acima do peso" className="avatar" />
            </div>
            <div className="text">
              <h2>{`Olá ${x.userName}`}</h2>
              <p>A informação fornecida indica que você está obeso</p>
              <p>As pesquisas indicam que ter um IMC acima do normal pode aumentar as chances de apresentar problemas de saúde sérios, como diabetes tipo 2, doenças do coração, derrames e alguns tipos de câncer.</p>
              <p>Se você perder um pouco de peso e conseguir se manter assim, pode ser algo positivo. Para muitos, a melhor maneira de conseguir isso é mudando a dieta. O exercício também ajuda, mas precisa estar associado à uma mudança na alimentação.</p>
              <img className="tabela" src={ table } alt="" />
              <br />
            </div>
          </div>
          <div className="embed-responsive embed-responsive-16by9 video">
            <iframe
              title="first"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/XW9IZfHiVZM"
              allowFullScreen
              frameBorder="50"
            />
            <iframe
              title="second"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/C5lD_KnevN4"
              allowFullScreen
              frameBorder="50"
            />
          </div>
        </div>
      )
    );
  }
}
DetailsAcimaDoPeso.propTypes = {}.isRequired;
