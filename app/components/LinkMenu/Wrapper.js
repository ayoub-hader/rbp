import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  background: transparent;
  height: 47px;
  padding-left: 40px;
  a {
    color: ${props => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 16px;
    font-family: 'source_sans_proregular';
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    span {
      img {
        margin-right: 28px;
      }
    }
  }
  &:hover,
  &:active {
    background: ${props => props.theme.colors.darkBlue};
    position: relative;
    &:after {
      position: absolute;
      width: 3px;
      content: '';
      background: ${props => props.theme.colors.white};
      left: 0;
      top: 0;
      bottom: 0;
    }
  }
`;
export default Wrapper;
