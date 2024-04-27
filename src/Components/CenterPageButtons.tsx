import React from 'react';
import Button from '@mui/material/Button';
import GroupSizesColors from './Buttons/GroupSizesColors';

// import { useTheme } from '@mui/material/styles'; // Import useTheme hook

type centerPageButtonsProps = {
  resetFields: React.Dispatch<React.SetStateAction<string>>;
};
// add refresh functionality to clicking on home or the title of the app

// const theme = useTheme();

const CenterPageButtons = ({
  resetFields, 
}: centerPageButtonsProps) => {
  const buttons = [
    <>
      <Button
        key="new"
        onClick={() => resetFields('')}
        sx={{ fontSize: '15px' }}
      >
        Reset
      </Button>
    </>,
  ];

  return (
    <div className="centerPageButtons">
      <GroupSizesColors buttons={buttons} />
    </div>
  );
};

export default CenterPageButtons;
