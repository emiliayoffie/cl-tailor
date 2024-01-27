import React, { useState } from 'react';
import { handleCoverLetterChange, handleCompanyNameChange, handleSubmit } from '../utils';
import Button from '@mui/material/Button';
import VariantButtonGroup from './Buttons/VariantButtonGroup';
import TextField from '@mui/material/TextField';

interface createNewScreenProps {
  switchToViewCurrentScreen: () => void;
  setModifiedLetter: React.Dispatch<React.SetStateAction<string>>;
  coverLetter: string;
  setCoverLetter: React.Dispatch<React.SetStateAction<string>>;
  companyName: string;
  setCompanyName: React.Dispatch<React.SetStateAction<string>>;
}

const CreateNewScreen = ({
  switchToViewCurrentScreen,
  setModifiedLetter,
  coverLetter,
  setCoverLetter,
  companyName,
  setCompanyName,
}: createNewScreenProps) => {
  const [coverLetterError, setCoverLetterError] = useState(false);
  const [companyNameError, setCompanyNameError] = useState(false);

  const generateLetter = () => {
    const isCoverLetterEmpty = !coverLetter.trim();
    const isCompanyNameEmpty = !companyName.trim();

    setCoverLetterError(isCoverLetterEmpty);
    setCompanyNameError(isCompanyNameEmpty);

    if (!isCoverLetterEmpty && !isCompanyNameEmpty) {
      handleSubmit(coverLetter, companyName, setModifiedLetter);
      switchToViewCurrentScreen();
    }
  };

  const button = [
    <Button onClick={generateLetter}>Generate Letter</Button>
  ];

  return (
    <div className="container">
      <h1>Cover Letter Tailor</h1>
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
          sx={{ maxWidth: '75%' }}
          error={coverLetterError}
          helperText={coverLetterError ? "Cover letter cannot be empty" : ""}
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
          sx={{ maxWidth: '75%' }}
          error={companyNameError}
          helperText={companyNameError ? "Company name cannot be empty" : ""}
        />
        <VariantButtonGroup buttons={button} />
      </div>
    </div>
  );
};

export default CreateNewScreen;
