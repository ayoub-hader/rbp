import styled from 'styled-components';

const Wrapper = styled.div`
  height: 45px;
  position: relative;
  margin-bottom: 15px;
  label {
    top: 0;
    left: 15px;
    position: absolute;
    transform: translate(0, 12px) scale(1);
    font-size: 14px;
    display: none;
    &.affLabel {
      transform: translate(0, 1.5px) scale(0.75);
      font-size: 11px;
      display: block;
      color: ${(props) => props.theme.colors.main};
      font-family: 'source_sans_prosemibold';
    }
  }
  input {
    border-radius: 5px;
    height: 100%;
    padding-left: 15px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    font-size: 16px;
    color: ${(props) => props.theme.colors.main};
    width: 100%;
    &:hover,
    &:focus,
    &.active {
      outline: 0;
      border: 1px solid ${(props) => props.theme.colors.main};
    }
    &::placeholder {
      top: 0;
      left: 15px;
      position: absolute;
      transform: translate(0, 12px) scale(1);
      font-size: 14px;
      font-family: 'source_sans_prosemibold';
      color: ${(props) => props.theme.colors.main};
    }
    &.active {
      &::placeholder {
        transform: translate(0, 1.5px) scale(0.75);
        font-size: 11px;
        color: ${(props) => props.theme.colors.main};
        font-family: 'source_sans_prosemibold';
      }
    }
  }
  .affLabel + input::placeholder {
    text-indent: -9999px;
  }
`;
export default Wrapper;
