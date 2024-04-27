import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useTheme } from '@mui/material/styles';

type groupSizeColorsProps = {
    buttons: JSX.Element[];
}

export default function GroupSizesColors({buttons}: groupSizeColorsProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        color: theme.palette.secondary.main,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group" >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}

