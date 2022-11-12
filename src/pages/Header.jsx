/* eslint-disable react/jsx-max-depth */
import { Component } from 'react';
import { Link } from 'react-router-dom';
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
              <Nav.Link>
                <Link className="link" to="/details/acima">Acima do Peso</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/details/abaixo">Abaixo do Peso</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/details/ideal">Peso Ideal</Link>
              </Nav.Link>
              <Nav.Link href="/details/Sobrepeso">
                <Link className="link" to="/details/Sobrepeso">Sobrepeso</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/details/userinfo">
                <Link className="link" to="/details/userinfo">{ x.userName }</Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="link" to="/details/userinfo">
                  <img className="userFoto" src={ x.userImage } alt="Sua foto" />
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
