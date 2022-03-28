import { setLocale } from 'yup';

const registerYupLocale = () => {
  setLocale({
    mixed: {
      required: 'Ce champ est obligatoire',
    },
    string: {
      email: "L'adresse email saisie n'est pas valide. Merci de vérifier",
      min: 'Trop court',
      max: 'Trop long',
    },
  });
};

export default registerYupLocale;
