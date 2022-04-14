import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const MyComponent = styled(Button)({
  color: 'darkslategray',
  backgroundColor: 'yellow',
  padding: 8,
  borderRadius: 4,
});

const TestPage = () => (
  <Stack spacing={2} m={4} direction="row">
    <Button variant="contained" color="customPrimary" disableElevation>
      Contained
    </Button>
    <Button variant="outlined" color="primary">
      Outlined
    </Button>
    <MyComponent>styled-component Button</MyComponent>
  </Stack>
);

export default TestPage;
