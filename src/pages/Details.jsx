import React, { Component } from 'react';
import Header from './Header';
import { getUser } from '../services/userApi';

export default class Details extends Component {
  componentDidMount() {
    console.log(getUser());
  }

  render() {
    return (
      <div>
        <Header />
        <div>Gordola details</div>
      </div>
    );
  }
}

Details.propTypes = {}.isRequired;
