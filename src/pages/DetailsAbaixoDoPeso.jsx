/* eslint-disable max-len */
import React, { Component } from 'react';
import Header from './Header';
import { getUser } from '../services/userApi';
import Loading from '../Components/loading';
import '../stylish/details.css';

export default class DetailsAbaixoDoPeso extends Component {
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
        <div>
          <Header />
          <div className="text-content-right">
            <h2>{`Olá ${x.userName}`}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="text-content-left">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          {/* <div className="video-content">
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
            <iframe
              className="video"
              width="853"
              height="480"
              src="https://www.youtube.com/embed/eIGij1zGYFg"
              title="Jojo Maronttinni, DJ Batata - Agora O Pau Vai Torar"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
              picture-in-picture"
            />
          </div> */}
        </div>
      )
    );
  }
}

DetailsAbaixoDoPeso.propTypes = {}.isRequired;
