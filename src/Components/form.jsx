import { Component } from 'react';
// import '../styles/Form.css';

export default class Form extends Component {
  render() {
    const {
      userName, userDescription, userAttr1, userAttr2,
      userAttr3, userImage, isSaveButtonDisabled, userAtt,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <form className="form form-group" action="get">
        <div className="form-group nameText">
          <label htmlFor="userName">
            <strong>Nome</strong>
            <input
              className="form-control"
              type="text"
              data-testid="name-input"
              name="userName"
              value={ userName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="userDescription">
            <strong>Descrição</strong>
            <textarea
              className="form-control textarea"
              data-testid="description-input"
              name="userDescription"
              rows={ 3 }
              value={ userDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <hr />
        <div className="atribute">
          <div className="form-group row">
            <label htmlFor="userAttr1">
              <strong>Idade</strong>
              <input
                max={ 120 }
                min={ 0 }
                className="form-control"
                type="number"
                data-testid="attr1-input"
                name="userAttr1"
                value={ userAttr1 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="userAttr2">
              <strong>peso</strong>
              <input
                max={ 200 }
                min={ 0 }
                className="form-control"
                type="number"
                data-testid="attr2-input"
                name="userAttr2"
                value={ userAttr2 }
                onChange={ onInputChange }
              />
            </label>
          </div>
          <div className="form-group row">
            <label htmlFor="userAttr3">
              <strong>altura</strong>
              <input
                max={ 90 }
                min={ 0 }
                className="form-control"
                type="text"
                data-testid="attr3-input"
                name="userAttr3"
                value={ userAttr3 }
                onChange={ onInputChange }
              />
            </label>
          </div>
        </div>
        <hr />
        <label htmlFor="userImage">
          <strong>Informe o link de uma foto sua</strong>
          <div className="form-group">
            <input
              className="form-control-file"
              type="text"
              name="userImage"
              data-testid="image-input"
              value={ userImage }
              onChange={ onInputChange }
            />
          </div>
        </label>
        <hr />
        <label htmlFor="userAtt">
          <strong>Pratica algum exercicio? </strong>
          <select
            className="form-control"
            name="userAtt"
            data-testid="rare-input"
            value={ userAtt }
            onChange={ onInputChange }
          >
            <option value="Sim">Sim</option>
            <option value="Não">Não</option>
          </select>
        </label>
        <br />
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
