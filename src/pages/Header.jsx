import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Products extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <nav>
          <Link data-testid="shopping-cart-button" to="/">
            Form
          </Link>
          <br />
          <Link data-testid="shopping-cart-button" to="/details">
            Detalhes
          </Link>
        </nav>
      </div>
    );
  }
}
