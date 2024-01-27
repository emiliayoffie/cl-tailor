import React from 'react';

export const handleCoverLetterChange = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  setCoverLetter: React.Dispatch<React.SetStateAction<string>>
) => {
  let value = event.target.value;
  // Trim trailing spaces
  value = value.replace(/\s+$/, '');
  setCoverLetter(value);
};

export const handleCompanyNameChange = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  setCompanyName: React.Dispatch<React.SetStateAction<string>>
) => {
  const target = event.target as HTMLInputElement;
  setCompanyName(target.value);
};

export const handleSubmit = (
  coverLetter: string,
  companyName: string,
  setModifiedLetter: React.Dispatch<React.SetStateAction<string>>
) => {
  const replacedText = coverLetter.replace(/<companyname>/gi, companyName);
  setModifiedLetter(replacedText);
};
