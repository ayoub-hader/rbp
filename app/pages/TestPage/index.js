import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TestPage = () => (
  <Stack spacing={2} m={4} direction="row">
    <Button variant="contained" color="customPrimary" disableElevation>
      Contained
    </Button>
    <Button variant="outlined" color="primary">
      Outlined
    </Button>
  </Stack>
);

export default TestPage;
