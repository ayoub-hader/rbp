import styled from 'styled-components';
import backLogin from './icon/backLogin@2x.png';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 209px;
  .pageLogin {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 40%;
    h2 {
      letter-spacing: 0;
      color: ${props => props.theme.colors.main};
      text-transform: uppercase;
      font-size: 34px;
      font-family: 'source_sans_probold';
    }
    a {
      font-family: 'source_sans_prosemibold';
      letter-spacing: 0;
      font-size: 20px;
      color: ${props => props.theme.colors.secondary};
      text-transform: uppercase;
    }
    form {
      width: 100%;
      & > div {
        margin-bottom: 20px;
        padding-bottom: 6px;
        &:nth-child(2) {
          margin-bottom: 40px;
        }
      }
    }
  }
  &:after {
    background-image: url("${backLogin}");
    background-repeat: repeat-x;
    content: "";
    height: 209px;
    position: absolute;
    background-size: contain;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
export default Wrapper;
