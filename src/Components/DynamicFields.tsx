import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

export type Field = {
  name: string;
};

interface DynamicFieldsProps {
  fieldNames: Field[];
  fieldValues: string[];
  setFieldNames: React.Dispatch<React.SetStateAction<Field[]>>;
  setFieldValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const DynamicFields = ({
  fieldNames,
  fieldValues,
  setFieldNames,
  setFieldValues,
}: DynamicFieldsProps) => {
  const theme = useTheme();

  const handleFieldNameChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newFieldNames = [...fieldNames];
    newFieldNames[index].name = event.target.value;
    setFieldNames(newFieldNames);
  };

  const handleFieldValueChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newFieldValues = [...fieldValues];
    newFieldValues[index] = event.target.value;
    setFieldValues(newFieldValues);
  };

  const handleAddField = () => {
    setFieldNames([...fieldNames, { name: '' }]);
    setFieldValues([...fieldValues, '']);
  };

  const handleRemoveField = (index: number) => {
    const newFieldNames = [...fieldNames];
    const newFieldValues = [...fieldValues];
    newFieldNames.splice(index, 1);
    newFieldValues.splice(index, 1);
    setFieldNames(newFieldNames);
    setFieldValues(newFieldValues);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {fieldNames.map((field, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            width: '75%',
            alignItems: 'center',
            // gap: '10px',
            // marginBottom: '10px',
          }}
        >
          <Box sx={{ flexGrow: 1, display: 'flex', 
          gap: '10px' 
          }}>
            <TextField
              name="name"
              label="Field Name"
              value={field.name}
              onChange={(event) => handleFieldNameChange(index, event)}
              placeholder="Replace <fieldname> with your field name"
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  color: theme.palette.text.primary,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: theme.palette.text.primary,
                  opacity: 1,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main, // Updated borderColor type to string
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.secondary.main, // Updated borderColor type to string
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main, // Updated borderColor type to string
                  },
                },
              }}
            />
            <TextField
              name="value"
              label="Field Value"
                value={field.name}
              onChange={(event) => handleFieldValueChange(index, event)}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{
                '& .MuiInputBase-input': {
                  color: theme.palette.text.primary,
                },
                '& .MuiInputBase-input::placeholder': {
                  color: theme.palette.text.primary,
                  opacity: 1,
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: theme.palette.primary.main, //default
                  },
                  '&:hover fieldset': {
                    borderColor: theme.palette.secondary.main,  //hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main, //focus
                  },
                },
              }}
            />
          </Box>
          <IconButton
            onClick={() => handleRemoveField(index)}
            sx={{ color: theme.palette.error.main }}
          >
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Box>
      ))}
      <Button
        onClick={handleAddField}
        sx={{
          color: theme.palette.addField?.main,
          textDecoration: 'none',
          '&:hover': {
            color: '#ce93d8',
            textDecoration: 'none',
          },
          // marginTop: '2vh',
          // marginBottom: '2vh',
        }}
      >
        <AddIcon /> Add Field
      </Button>
    </div>
  );
};

export default DynamicFields;
