import styled from 'styled-components';

const MovieCardWrapper = styled.div`
  border-radius: 6px;
  box-shadow: 1px 1px 5px 1px #ddd;
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  padding: 10px;

  .poster {
    display: inline-flex;
    margin-right: 0.5em;

    img {
      width: 170px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 1em;
      font-weight: bold;
    }

    .year {
      font-size: 0.8em;
      text-style: italic;
    }
  }
`;

export default MovieCardWrapper;
