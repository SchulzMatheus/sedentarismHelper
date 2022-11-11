import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../Components/form';
import { createUser } from '../services/userApi';

export default class Shopcart extends Component {
  state = {
    gordolaName: '',
    gordolaDescription: '',
    gordolaAttr1: '',
    gordolaAttr2: '',
    gordolaAttr3: '',
    gordolaImage: '',
    gordola: [],
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
      gordolaName, gordolaDescription, gordolaAttr1, gordolaAttr2, gordolaAttr3,
      gordolaImage, gordola } = this.state;

    await createUser({ gordolaName,
      gordolaDescription,
      gordolaAttr1,
      gordolaAttr2,
      gordolaAttr3,
      gordolaImage });

    this.setState({
      redirect: true,
      gordolaName: '',
      gordolaDescription: '',
      gordolaAttr1: '0',
      gordolaAttr2: '0',
      gordolaAttr3: '0',
      gordolaImage: 'https://picsum.photos/200/300',
    });

    gordola.push({
      gordolaName,
      gordolaDescription,
      gordolaAttr1,
      gordolaAttr2,
      gordolaAttr3,
      gordolaImage,
    });
  };

  render() {
    const {
      gordolaName, gordolaDescription, gordolaAttr1, gordolaAttr2, gordolaAttr3,
      gordolaImage, gordola, redirect,
    } = this.state;
    const maxBuild = 8000000;
    const maxStats = 9000000;
    const auxAtt = [gordolaAttr1, gordolaAttr2, gordolaAttr3];
    const aux = [gordolaName, gordolaImage, gordolaDescription];
    const build = Number(gordolaAttr1) + Number(gordolaAttr2) + Number(gordolaAttr3);
    if (redirect) {
      return <Redirect to="/details" />;
    }
    return (
      <div>
        <div>
          <Form
            gordolaName={ gordolaName }
            gordolaDescription={ gordolaDescription }
            gordolaAttr1={ gordolaAttr1 }
            gordolaAttr2={ gordolaAttr2 }
            gordolaAttr3={ gordolaAttr3 }
            gordolaImage={ gordolaImage }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            isSaveButtonDisabled={ aux.some((e) => e.length <= 0) || build > maxBuild
              || auxAtt.some((attr) => attr < 0)
              || auxAtt.some((attr) => attr > maxStats)
              || gordola.length >= 1 }
          />
        </div>
      </div>
    );
  }
}
