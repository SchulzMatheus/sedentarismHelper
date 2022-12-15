/* eslint-disable no-magic-numbers */
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../Components/form';
import { createUser } from '../services/userApi';

export default class Login extends Component {
  state = {
    userName: '',
    userDescription: '',
    userAttr1: '0',
    userAttr2: '0',
    userAttr3: '0',
    userImage: 'https://picsum.photos/200/300',
    userAtt: 'sim',
    user: [],
    redirect: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = async (event) => {
    event.preventDefault();
    const {
      userName, userDescription, userAttr1, userAttr2, userAttr3,
      userImage, user, userAtt } = this.state;

    await createUser({ userName,
      userDescription,
      userAttr1,
      userAttr2,
      userAttr3,
      userImage,
      userAtt,
    });

    this.setState({
      redirect: true,
    });

    user.push({
      userName,
      userDescription,
      userAttr1,
      userAttr2,
      userAttr3,
      userImage,
      userAtt,
    });
  };

  render() {
    const {
      userName, userDescription, userAttr1, userAttr2, userAttr3,
      userImage, user, redirect, userAtt,
    } = this.state;
    const maxBuild = 8000000;
    const maxStats = 9000000;
    const auxAtt = [userAttr1, userAttr2, userAttr3];
    const aux = [userName, userImage, userDescription];
    const build = Number(userAttr1) + Number(userAttr2) + Number(userAttr3);
    const altura = Number(userAttr3) * Number(userAttr3);
    const validador = Number(userAttr2) / altura;
    if (redirect) {
      if (validador < 18.5) {
        return <Redirect to="/details/Abaixo" />;
      }
      if (validador >= 18.5 && validador < 25) {
        return <Redirect to="/details/Ideal" />;
      }
      if (validador >= 25 && validador < 30) {
        return <Redirect to="/details/Sobrepeso" />;
      }
      if (validador > 30) {
        return <Redirect to="/details/Acima" />;
      }
    }
    return (
      <div className="evaluator">
        <a className="link" href="https://loja.fpbonline.com.br/">
          <img className="img" src="https://loja.fpbonline.com.br/media/logo/stores/29/FBP.png" alt="" />
        </a>
        <h2>Informe os seus dados</h2>
        <Form
          userName={ userName }
          userDescription={ userDescription }
          userAttr1={ userAttr1 }
          userAttr2={ userAttr2 }
          userAttr3={ userAttr3 }
          userImage={ userImage }
          userAtt={ userAtt }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ aux.some((e) => e.length <= 0) || build > maxBuild
              || auxAtt.some((attr) => attr < 0)
              || auxAtt.some((attr) => attr > maxStats)
              || user.length >= 1 }
        />
      </div>

    );
  }
}
