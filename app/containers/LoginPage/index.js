/**
 *
 * LoginPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Wrapper from './Wrapper';
import CredentialsField from '../../components/CredentialsField';
import Button from '../../components/FormButton';
import logo from './icon/logo.png';
import iconUser from './icon/iconUser@2x.png';
import iconPass from './icon/iconPass@2x.png';

const stateSelector = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function LoginPage() {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });

  /* eslint-disable no-unused-vars */
  const { loginPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <Wrapper>
      <div className="pageLogin">
        <Link to="/" className="mb-40">
          <img src={logo} alt="" />
        </Link>
        <h2 className="mb-40">AXA OpenInsurance</h2>
        <form className="mb-20">
          <CredentialsField
            className="mb-20"
            iconField={iconUser}
            placeholder="utilisateur"
          />
          <CredentialsField
            className="mb-40"
            iconField={iconPass}
            placeholder="mot de passe"
          />
          <Button>Connexion</Button>
        </form>
        <Link to="/">mot de passe oublie</Link>
      </div>
    </Wrapper>
  );
}

LoginPage.propTypes = {};

export default LoginPage;
