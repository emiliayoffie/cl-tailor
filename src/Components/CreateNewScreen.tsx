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
import VariantButtonGroup from './Buttons/VariantButtonGroup';
import TextField from '@mui/material/TextField';
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
  const navigate = useNavigate();

  const [coverLetterError, setCoverLetterError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);

  const [fieldNames, setFieldNames] = useState<Field[]>([]);
  const [fieldValues, setFieldValues] = useState<string[]>([]);

  useEffect(() => {
    setCompanyName('');
  }, [setCompanyName]);

  useEffect(() => {
    setFieldValues(fieldNames.map(() => ''));
  }, [fieldNames]);

  const generateLetter = () => {
    const isCoverLetterEmpty = !coverLetter.trim();
    const isCompanyNameEmpty = !companyName.trim();

    setCoverLetterError(isCoverLetterEmpty);
    setCompanyNameError(isCompanyNameEmpty);

    if (!isCoverLetterEmpty && !isCompanyNameEmpty) {
      // const allFields = [...fields, { name: '<companyname>', value: companyName }];
      const modifiedLetter = parseAndReplaceTemplate(
        coverLetter,
        { name: '<companyname>', value: companyName },
        fieldNames,
        fieldValues
      );
      setModifiedLetter(modifiedLetter);
      navigate('/generate');
    }
  };

  const button = [
    <Button
      style={{
        color: theme.palette.primary.main,
        textTransform: 'none',
      }}
      onClick={generateLetter}
    >
      <AutoAwesomeIcon />
      Generate Letter
    </Button>,
  ];

  return (
    <div className="container">
      <div className="initial-screen">
        <TextField
          label="Cover Letter Template"
          multiline
          rows={3}
          value={coverLetter}
          onChange={(e) => handleCoverLetterChange(e, setCoverLetter)}
          placeholder="Enter your cover letter template here..."
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
                borderColor: theme.palette.primary, // Default state
              },
              '&:hover fieldset': {
                borderColor: theme.palette.secondary, // Hover state
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.main, // Focus state
              },
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
                borderColor: theme.palette.secondary, // Default state
              },
              '&:hover fieldset': {
                borderColor: theme.palette.primary, // Hover state
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.main, // Focus state
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
        <VariantButtonGroup buttons={button} />
      </div>
    </div>
  );
};

export default CreateNewScreen;
