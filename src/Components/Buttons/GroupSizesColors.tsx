import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

// const buttons = [
//   <Button key="one">One</Button>,
//   <Button key="two">Two</Button>,
//   <Button key="three">Three</Button>,
// ];

type groupSizeColorsProps = {
    buttons: JSX.Element[];
}

export default function GroupSizesColors({buttons}: groupSizeColorsProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        {buttons}
      </ButtonGroup>
      {/* <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup> */}
    </Box>
  );
}

