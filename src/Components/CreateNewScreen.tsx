import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  handleCoverLetterChange,
  handleCompanyNameChange,
  handleSubmit,
} from '../utils';
import Button from '@mui/material/Button';
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

  useEffect(() => {
    setCompanyName('');
  }, [setCompanyName]);

  const generateLetter = () => {
    const isCoverLetterEmpty = !coverLetter.trim();
    const isCompanyNameEmpty = !companyName.trim();

    setCoverLetterError(isCoverLetterEmpty);
    setCompanyNameError(isCompanyNameEmpty);

    if (!isCoverLetterEmpty && !isCompanyNameEmpty) {
      handleSubmit(coverLetter, companyName, setModifiedLetter);
      navigate('/generate');
    }
  };

  const button = [
    <Button
      style={{ color: theme.palette.primary.main }}
      onClick={generateLetter}
    >
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
              color: theme.palette.secondary.main,
            },
            '& .MuiInputBase-input::placeholder': {
              color: theme.palette.secondary.light,
              opacity: 1,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.secondary.main, // Default state
              },
              '&:hover fieldset': {
                borderColor: theme.palette.secondary.dark, // Hover state
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
              color: theme.palette.secondary.main,
            },
            '& .MuiInputBase-input::placeholder': {
              color: theme.palette.secondary.light,
              opacity: 1,
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: theme.palette.secondary.main, // Default state
              },
              '&:hover fieldset': {
                borderColor: theme.palette.secondary.dark, // Hover state
              },
              '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.main, // Focus state
              },
            },
          }}
          error={companyNameError}
          helperText={companyNameError ? 'Company name cannot be empty' : ''}
        />
        <VariantButtonGroup buttons={button} />
      </div>
    </div>
  );
};

export default CreateNewScreen;
