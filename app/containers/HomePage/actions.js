import { FILL_FORM } from './constants';

export function fillFormAction(formm) {
  console.log(formm);
  return {
    type: FILL_FORM,
    formm,
  };
}
