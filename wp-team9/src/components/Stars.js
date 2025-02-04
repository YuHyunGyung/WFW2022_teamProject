import * as React from 'react';
import {Rating, Stack} from '@mui/material';

const Stars = () => {
  /*
  <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  */
  return (
    <Stack spacing={1}>
      <Rating name="size-medium" defaultValue={5} />
    </Stack>
  );
}

export default Stars;