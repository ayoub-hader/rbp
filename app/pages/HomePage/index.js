import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'components/Button';
import FormInput from 'components/FormInput';
import { setUserAction } from './actions';
import reducer from './reducer';
import {
  makeSelectUser,
  makeSelectUserError,
  makeSelectUserSuccess,
} from './selectors';
import saga from './saga';

const stateSelector = createStructuredSelector({
  user: makeSelectUser,
  success: makeSelectUserSuccess,
  error: makeSelectUserError,
});

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  email: yup.string().required().email(),
  age: yup
    .number()
    .transform((currentValue, outputValue) => {
      return outputValue === '' ? undefined : currentValue;
    })
    .required()
    .positive()
    .integer()
    .min(15)
    .max(20),
});

function HomePage() {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  const dispatch = useDispatch();
  const { user, success, error } = useSelector(stateSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = (data) => {
    dispatch(setUserAction(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {user ? <div>Current user name : {user?.firstName}</div> : null}
      <div>
        <FormInput
          label="firstName"
          type="text"
          register={register}
          error={errors.firstName}
        />
      </div>
      <div>
        <FormInput
          label="email"
          type="text"
          register={register}
          error={errors.email}
        />
      </div>
      <div>
        <FormInput
          label="age"
          type="number"
          register={register}
          error={errors.age}
        />
      </div>
      <Button value={'submit'} />
    </form>
  );
}

export default HomePage;
