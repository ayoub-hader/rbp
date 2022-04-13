import { setLocale } from 'yup';

const registerYupLocale = () => {
  setLocale({
    mixed: {
      required: 'This field is required',
    },
    string: {
      email: 'Email address is not in the right format',
    },
    number: {
      min: 'value must be higher then ${min}',
      max: 'Value must be lower then ${max}',
    },
  });
};

export default registerYupLocale;
