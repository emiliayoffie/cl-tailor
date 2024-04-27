
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

type variantButtonGroupProps = {
    buttons: JSX.Element[];
}

export default function VariantButtonGroup({ buttons }: variantButtonGroupProps) {
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
        <ButtonGroup variant="text" aria-label="outlined button group">
        {buttons}
        </ButtonGroup>
      </Box>
    );
  }


