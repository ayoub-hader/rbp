/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fillFormAction } from './actions';
import { makeSelectForm } from './selectors';
import { useInjectReducer } from 'redux-injectors';
import reducer from './reducer';
import { useForm } from 'react-hook-form';
import FormInput from 'components/FormInput';

const stateSelector = createStructuredSelector({
  form: makeSelectForm,
});

export default function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  const dispatch = useDispatch();
  const { form } = useSelector(stateSelector);
  const [blurr, setBlurr] = useState('test');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    dispatch(fillFormAction(data));
    console.log(data);
  };
  const onBlur = data => {
    console.log('imdata', data);
    setBlurr(data);
    console.log('blur', blur);
  };
  console.log(form);
  console.log(watch('example'));
  console.log(watch('name'));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register('example')}
          onBlur={e => {
            onBlur(e.target.value);
          }}
        />
        <FormInput label="name" register={register} />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register('exampleRequired', { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <p>{watch('example')}</p>
      <p>{watch('name')}</p>
      <p>blur{blurr}</p>
    </>
  );
}
