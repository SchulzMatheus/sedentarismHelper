import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../stylish/Header.css';
import UserCard from '../Components/userCard';
import { getUser } from '../services/userApi';
import Loading from '../Components/loading';
import Header from './Header';

export default class Products extends Component {
  state = {
    x: {},
    loading: false,
    redirect: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const y = await getUser();
    this.setState({ x: y, loading: false });
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { x, loading, redirect } = this.state;
    if (redirect) { return <Redirect to="/" />; }
    return (
      loading ? (
        <div>
          <Header />
          <Loading />
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
          <button type="button" onClick={ this.handleClick }>Editar informações</button>
        </div>
      )
    );
  }
}
