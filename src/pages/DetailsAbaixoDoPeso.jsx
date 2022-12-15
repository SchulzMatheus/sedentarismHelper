/* eslint-disable max-len */
import React, { Component } from 'react';
import Header from './Header';
import { getUser } from '../services/userApi';
import Loading from '../Components/loading';
import '../stylish/details.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pesoideal from '../images/pesoideal-removebg-preview.png';
import table from '../images/índice.jpeg';

export default class DetailsAbaixoDoPeso extends Component {
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
              <p>A informação fornecida indica que seu peso pode estar abaixo do normal.</p>
              <p>Pode haver riscos de saúde associados a um IMC baixo, como anemia, osteoporose, um sistema imunológico fraco e problemas de fertilidade.</p>
              <p>Esta não é uma ferramenta de diagnóstico médico, então não se assuste se não é o resultado que você esperava obter.</p>
              <p>Se você está preocupado com seu peso, procure um médico.</p>
              <img className="tabela" src={ table } alt="" />
              <br />
            </div>
          </div>
          <div className="embed-responsive embed-responsive-16by9 video">
            <iframe
              title="first"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/x9xLKu1yyxA"
              allowFullScreen
              frameBorder="50"
            />
            <iframe
              title="second"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/rllBGZVqCT8"
              allowFullScreen
              frameBorder="50"
            />
          </div>
        </div>
      )
    );
  }
}

DetailsAbaixoDoPeso.propTypes = {}.isRequired;
