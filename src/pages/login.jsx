import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../Components/form';
import { createUser } from '../services/userApi';

export default class Shopcart extends Component {
  state = {
    userName: '',
    userDescription: '',
    userAttr1: '0',
    userAttr2: '0',
    userAttr3: '0',
    userImage: '',
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
      userImage, user } = this.state;

    await createUser({ userName,
      userDescription,
      userAttr1,
      userAttr2,
      userAttr3,
      userImage });

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
    });
  };

  render() {
    const {
      userName, userDescription, userAttr1, userAttr2, userAttr3,
      userImage, user, redirect,
    } = this.state;
    const maxBuild = 8000000;
    const maxStats = 9000000;
    const auxAtt = [userAttr1, userAttr2, userAttr3];
    const aux = [userName, userImage, userDescription];
    const build = Number(userAttr1) + Number(userAttr2) + Number(userAttr3);
    if (redirect) {
      return <Redirect to="/details" />;
    }
    return (
      <div>
        <div>
          <Form
            userName={ userName }
            userDescription={ userDescription }
            userAttr1={ userAttr1 }
            userAttr2={ userAttr2 }
            userAttr3={ userAttr3 }
            userImage={ userImage }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ aux.some((e) => e.length <= 0) || build > maxBuild
              || auxAtt.some((attr) => attr < 0)
              || auxAtt.some((attr) => attr > maxStats)
              || user.length >= 1 }
          />
        </div>
      </div>
    );
  }
}
