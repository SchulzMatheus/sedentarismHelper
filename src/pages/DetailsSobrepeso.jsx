/* eslint-disable max-len */
import React, { Component } from 'react';
import Header from './Header';
import Loading from '../Components/loading';
import { getUser } from '../services/userApi';
import '../stylish/details.css';

export default class DetailsSobrePeso extends Component {
  state = {
    x: {},
    loading: false,
  };

  async componentDidMount() {
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
        <div>
          <Header />
          <div className="text-content-right">
            <div>
              <img src="https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gMnhpicDJGF1z6w5nXxr9riGL_e7KlsRr9kCnDUnVUYZ6S71B-ilBvDQGEP5yK1vN_Uv4KiDmWL1jNPW2DCkEmtbzl4sA=w640-h480" alt="Avatar acima do peso" className="avatar" />
            </div>
            <div className="text">
              <h2>{`Olá ${x.userName}`}</h2>
              <p>A informação fornecida indica que você está com sobrepeso</p>
              <p>As pesquisas indicam que ter um IMC acima do normal pode aumentar as chances de apresentar problemas de saúde sérios, como diabetes tipo 2, doenças do coração, derrames e alguns tipos de câncer.</p>
              <p>Se você perder um pouco de peso e conseguir se manter assim, pode ser algo positivo. Para muitos, a melhor maneira de conseguir isso é mudando a dieta. O exercício também ajuda, mas precisa estar associado à uma mudança na alimentação.</p>
              <p>Pequenas mudanças de hábito como reduzir tamanhos das porções ou escolher lanchinhos mais saudáveis e bebidas menos calóricas podem te ajudar a perder peso ou a não engordar.</p>
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
          </div>
          <div className="embed-responsive embed-responsive-16by9 video">
            <iframe
              title="first"
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/2vC6HrNyMf0"
              allowFullScreen
              frameBorder="50"
            />
          </div>
        </div>
      )
    );
  }
}

DetailsSobrePeso.propTypes = {}.isRequired;
