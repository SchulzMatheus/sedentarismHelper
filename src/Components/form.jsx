import { Component } from 'react';
// import '../styles/Form.css';

export default class Form extends Component {
  render() {
    const {
      gordolaName, gordolaDescription, gordolaAttr1, gordolaAttr2,
      gordolaAttr3, gordolaImage, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="form form-group" action="get">
        <div className="form-group nameText">
          <label htmlFor="gordolaName">
            <strong>Nome</strong>
            <input
              className="form-control"
              type="text"
              data-testid="name-input"
              name="gordolaName"
              value={ gordolaName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="gordolaDescription">
            <strong>Descrição</strong>
            <textarea
              className="form-control textarea"
              data-testid="description-input"
              name="gordolaDescription"
              rows={ 3 }
              value={ gordolaDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <hr />
        <div className="atribute">
          <div className="form-group row">
            <label htmlFor="gordolaAttr1">
              <strong>Idade</strong>
              <input
                max={ 120 }
                min={ 0 }
                className="form-control"
                type="number"
                data-testid="attr1-input"
                name="gordolaAttr1"
                value={ gordolaAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="gordolaAttr2">
              <strong>peso</strong>
              <input
                max={ 200 }
                min={ 0 }
                className="form-control"
                type="number"
                data-testid="attr2-input"
                name="gordolaAttr2"
                value={ gordolaAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="gordolaAttr3">
              <strong>altura</strong>
              <input
                max={ 90 }
                min={ 0 }
                className="form-control"
                type="text"
                data-testid="attr3-input"
                name="gordolaAttr3"
                value={ gordolaAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
        </div>
        <hr />
        <label htmlFor="gordolaImage">
          <strong>Informe o link de uma foto sua</strong>
          <div className="form-group">
            <input
              className="form-control-file"
              type="text"
              name="gordolaImage"
              data-testid="image-input"
              value={ gordolaImage }
              onChange={ onInputChange }
            />
          </div>
        </label>
        <hr />
        <button
          className="btn btn-primary saveBtn"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {}.isRequired;
