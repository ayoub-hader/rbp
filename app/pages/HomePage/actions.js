import {
  CLEAN_UP,
  SET_USER,
  SET_USER_ERROR,
  SET_USER_SUCCESS,
} from './constants';

export const setUserAction = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const setUserSuccessAction = () => {
  return {
    type: SET_USER_SUCCESS,
  };
};

export const setUserErrorAction = (error) => {
  return {
    type: SET_USER_ERROR,
    error,
  };
};

export const setCleanUpAction = () => {
  return {
    type: CLEAN_UP,
  };
};
