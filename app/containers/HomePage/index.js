/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fillFormAction } from './actions';
import { makeSelectFormm } from './selectors';
import { useInjectReducer } from 'redux-injectors';
import reducer from './reducer';
import { useForm } from 'react-hook-form';
import FormInput from 'components/FormInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const stateSelector = createStructuredSelector({
  formm: makeSelectFormm,
});
const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  email: yup.string().required().email(),
  age: yup.number().required().positive().integer(),
  website: yup.string().url(),
});
export default function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  const dispatch = useDispatch();
  const { formm } = useSelector(stateSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    dispatch(fillFormAction(data));
  };
  console.log('form', formm);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <FormInput
          label="firstName"
          type="texte"
          register={register}
          errors={errors.firstName}
        />
      </div>
      <div>
        <FormInput
          label="email"
          type="texte"
          register={register}
          errors={errors.email}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <FormInput
          label="age"
          type="number"
          register={register}
          errors={errors.age}
        />
      </div>
      <div>
        <label>Website</label>
        <input {...register('website')} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>
      <input type="submit" />
    </form>
  );
}
