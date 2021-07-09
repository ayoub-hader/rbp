import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: 10px;
  border-bottom: 1px solid ${props => props.theme.colors.main};
  min-width: 275px;
  font-family: 'source_sans_prosemibold';
  text-align: left;
  img {
    margin-right: 7px;
    width: 15px;
  }
  input {
    border: none;
    &:focus,
    &:hover {
      border: none;
      outline: 0;
    }
    &::placeholder {
      color: ${props => props.theme.colors.black};
      letter-spacing: 0;
      text-transform: uppercase;
      font-size: 14px;
      font-family: 'source_sans_proregular';
    }
  }
`;
export default Wrapper;
