import styled from 'styled-components';

export default {
  /* gradients: {
    green: 'linear-gradient(270deg, #81ecec 0%, #00cec9 100%)',
    amber: 'linear-gradient(90deg, #ffeaa7 0%, #fdcb6e 100%)',
    red: 'linear-gradient(90deg, #ff7675 0%, #e64748 100%)',
    default: 'linear-gradient(270deg, #b3b3b3 0%, #808080 100%)',
  }, */
  colors: {
    main: '#00008F',
    secondary: '#F07662',
    blue: '#4976BA',
    move: '#F93276',
    gray: '#E7ECF2',
    black: '#333333',
    white: '#FFFFFF',
    darkBlue: '#131357',
  },
};
export const h2 = styled.h2`
  letter-spacing: 0;
  color: ${props => props.theme.colors.main};
  text-transform: uppercase;
  font-size: 34px;
  font-family: 'source_sans_probold';
`;
