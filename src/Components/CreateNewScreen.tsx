import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  handleCoverLetterChange,
  handleCompanyNameChange,
  parseAndReplaceTemplate,
} from '../utils';
import DynamicFields, { Field } from './DynamicFields';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ClearIcon from '@mui/icons-material/Clear';
import VariantButtonGroup from './Buttons/VariantButtonGroup';
import TextField from '@mui/material/TextField';
import CenterPageButtons from './CenterPageButtons';
import { useTheme } from '@mui/material/styles';

interface createNewScreenProps {
  setModifiedLetter: React.Dispatch<React.SetStateAction<string>>;
  coverLetter: string;
  setCoverLetter: React.Dispatch<React.SetStateAction<string>>;
  companyName: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
}

const CreateNewScreen = ({
  setModifiedLetter,
  coverLetter,
  setCoverLetter,
  companyName,
  setCompanyName,
}: createNewScreenProps) => {
  const theme = useTheme();

  const [coverLetterError, setCoverLetterError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);

  const [fieldNames, setFieldNames] = useState<Field[]>([]);
  const [fieldValues, setFieldValues] = useState<string[]>([]);

  useEffect(() => {
    // Automatic letter update logic
    if (coverLetter && companyName && fieldValues.length === fieldNames.length) {
      const newModifiedLetter = parseAndReplaceTemplate(
        coverLetter,
        { name: '<companyname>', value: companyName },
        fieldNames,
        fieldValues
      );
      setModifiedLetter(newModifiedLetter);
    }
  }, [coverLetter, companyName, fieldNames, fieldValues, setModifiedLetter]);


  return (
    <>
    <TextField
      label="Cover Letter Template"
      multiline
      rows={5}
      value={coverLetter}
      onChange={(e) => handleCoverLetterChange(e, setCoverLetter)}
      placeholder="Enter your cover letter template here..."
      required
      variant="outlined"
      fullWidth
      margin="normal"
      InputProps={{
        style: {
          resize: "vertical", 
        }
      }}
      sx={{
        maxWidth: '75%',
      
        '& .MuiInputBase-input': {
          color: theme.palette.text.primary,
        },
        '& .MuiInputBase-input::placeholder': {
          color: theme.palette.text.primary,
          opacity: 1,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette.secondary.main, // Default state
          },
          '&:hover fieldset': {
            borderColor: theme.palette.primary.main, // Hover state
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main, // Focus state
          },
          '& .MuiInputBase-inputMultiline': {
            resize: 'vertical', // Adds resize handle at the bottom
          }
        },
      }}
      error={coverLetterError}
      helperText={coverLetterError ? 'Cover letter cannot be empty' : ''}
    />
    <TextField
      label="Company Name"
      type="text"
      value={companyName}
      onChange={(e) => handleCompanyNameChange(e, setCompanyName)}
      placeholder="Company name"
      required
      variant="outlined"
      fullWidth
      margin="normal"
      sx={{
        maxWidth: '75%',
        '& .MuiInputBase-input': {
          color: theme.palette.text.primary,
        },
        '& .MuiInputBase-input::placeholder': {
          color: theme.palette.text.primary,
          opacity: 1,
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: theme.palette.secondary.main, // Default state
          },
          '&:hover fieldset': {
            borderColor: theme.palette.primary.main, // Hover state
          },
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main, // Focus state
          },
        },
      }}
      error={companyNameError}
      helperText={companyNameError ? 'Company name cannot be empty' : ''}
    />
    <DynamicFields
      fieldNames={fieldNames}
      fieldValues={fieldValues}
      setFieldNames={setFieldNames}
      setFieldValues={setFieldValues}
    />
    <CenterPageButtons/>
    </>

  );
};

export default CreateNewScreen;