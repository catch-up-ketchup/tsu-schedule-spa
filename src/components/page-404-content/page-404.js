import React, { useCallback } from 'react';
import { NavLink } from "react-router-dom";

import { toggleClass, blockClick } from "../../utils";
import { BiGhost } from "react-icons/all";

import './page-404.scss';

const Page404 = () => {

  const handleClick = useCallback(() => {
    toggleClass('page-404__icon', 'rotate');
    blockClick('page-404__icon', 500);
  }, []);

  return (
    <div className="page-404">
      <div className="container">
        <div className="page-404__icon" onClick={handleClick}>
          <BiGhost/>
        </div>
        <h1 className="page-404__title">Ooops...</h1>
        <p className="page-404__text">
          Такой страницы не существует&nbsp;:(
        </p>
        <NavLink to={'/'} className='page-404__link'>
          <span>На главную</span>
        </NavLink>
      </div>
    </div>
  );
};


export default Page404;