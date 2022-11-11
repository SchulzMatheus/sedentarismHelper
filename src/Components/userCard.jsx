import React, { Component } from 'react';

export default class userCard extends Component {
  render() {
    const {
      userName, userDescription,
      userAttr1, userAttr2, userAttr3, userImage, userAtt } = this.props;
    return (
      <div className="userContent">
        <div className="nameImgContent">
          <p className="userName" data-testid="name-user">
            Nome:
            {' '}
            { userName }
          </p>
          <img
            className="img"
            data-testid="image-user"
            src={ userImage }
            alt={ userName }
          />
        </div>
        <div className="descriptionContent">
          <p data-testid="description-user">
            Descrição:
            {' '}
            { userDescription }
          </p>
        </div>
        <div className="AttrContent">
          <div className="att1Content">
            <p data-testid="attr1-user">
              Idade....................................
              <span className="att1">
                { userAttr1 }
              </span>
            </p>
          </div>
          <div className="att1Content">
            <p data-testid="attr2-user">
              Peso....................................
              <span className="att1">
                { userAttr2 }
                {' '}
                KG
              </span>
            </p>
          </div>
          <div className="att1Content">
            <p data-testid="attr3-user">
              Altura....................................
              <span className="att1">
                { userAttr3 }
                {' '}
                M
              </span>
            </p>
          </div>
          <div className="att1Content">
            <p data-testid="attr4-user">
              Pratica Exercicio....................................
              <span className="att1">
                { userAtt }
              </span>
            </p>
          </div>
        </div>
      </div>

    );
  }
}

userCard.propTypes = {}.isRequired;
