import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

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
    </Box>
  );
}

