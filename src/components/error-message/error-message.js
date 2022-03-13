import React from 'react';

import { BiError } from "react-icons/all";

import './error-message.scss';


const ErrorMessage = () => {
  return (
    <div className="error-message">
      <div className="container">
        <div className="error-message__content">
          <h3 className="error-message__heading">
            <span className="error-message__title">Error</span>
            <span className="error-message__icon"><BiError/></span>
          </h3>
          <p className="error-message__text">Похоже, произошла какая-то ошибка</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;