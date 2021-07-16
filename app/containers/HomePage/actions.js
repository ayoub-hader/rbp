import { FILL_FORM } from './constants';

export function fillFormAction(params) {
  return {
    type: FILL_FORM,
    params,
  };
}
