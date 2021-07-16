import { initialState } from 'containers/OMDBPage/reducer';
import produce from 'immer';
import { FILL_FORM } from './constants';

export const initialise = {
  form: {},
};

const homePageReducer = produce((draft, action) => {
  switch (action.tyoe) {
    case FILL_FORM:
      draft.form = action.params;
      break;
  }
}, initialState);

export default homePageReducer;
