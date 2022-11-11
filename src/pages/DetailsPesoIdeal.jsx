import React, { Component } from 'react';
import Header from './Header';
import { getUser } from '../services/userApi';
import UserCard from '../Components/userCard';

export default class DetailsPesoIdeal extends Component {
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
          {' '}
          <br />
          {' '}
          <h1>Carregando</h1>
        </div>
      ) : (
        <div>
          <Header />
          <UserCard
            userName={ x.userName }
            userDescription={ x.userDescription }
            userAtt={ x.userAtt }
            userAttr1={ x.userAttr1 }
            userAttr2={ x.userAttr2 }
            userAttr3={ x.userAttr3 }
            userImage={ x.userImage }
          />
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/eIGij1zGYFg"
            title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
          />
        </div>
      )
    );
  }
}

DetailsPesoIdeal.propTypes = {}.isRequired;
