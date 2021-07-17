import produce from 'immer';
import { FILL_FORM } from './constants';

export const initialState = {
  formm: {},
};

const homePageReducer = produce((draft, action) => {
  switch (action.tyoe) {
    case FILL_FORM:
      draft.formm = action.formm;
      break;
  }
}, initialState);

export default homePageReducer;
