import React, { useCallback, useMemo } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import InputField from "../input-field";
import { fetchSchedule } from "../../features";

import './search-form.scss';


const SearchForm = () => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({ mode: "onSubmit" });
  const inputName = useMemo(() => 'searchValue', []);

  const dispatch = useDispatch();

  const onSubmit = useCallback((formObj) => {
    dispatch(fetchSchedule(formObj[inputName]));
  }, [dispatch, inputName]);

  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="search-form__wrapper">
          <div className="search-form__content">
            <h2 className="search-form__title">
              Введите номер группы, чтобы узнать расписание</h2>
            <div className="search-form__row">
              <div className="search-form__input">
                <InputField register={register} name={inputName} errors={errors} setValue={setValue}/>
              </div>
            </div>
            <button className="search-form__button blue-button" type="submit">
              Смотреть расписание
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;