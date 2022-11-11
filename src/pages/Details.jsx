import React, { Component } from 'react';
import Header from './Header';
import { getUser } from '../services/userApi';
import UserCard from '../Components/userCard';

export default class Details extends Component {
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
      loading ? <Header /> : (
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
        </div>
      )
    );
  }
}

Details.propTypes = {}.isRequired;
