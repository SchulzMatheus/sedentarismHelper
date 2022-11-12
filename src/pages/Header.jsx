/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import '../stylish/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { getUser } from '../services/userApi';

export default class Products extends Component {
  state = {
    x: {},
  };

  async componentDidMount() {
    const y = await getUser();
    this.setState({ x: y });
  }

  render() {
    const { x } = this.state;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/details/acima">Acima do peso</Nav.Link>
              <Nav.Link href="/details/abaixo">Abaixo do peso</Nav.Link>
              <Nav.Link href="/details/ideal">Peso ideal</Nav.Link>
              <Nav.Link href="/details/Sobrepeso">Sobrepeso</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="">{ x.userName }</Nav.Link>
              <Nav.Link href="">
                <img className="userFoto" src={ x.userImage } alt="Sua foto" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    );
  }
}
