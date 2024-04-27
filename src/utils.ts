import React from 'react';
import { Field } from './Components/DynamicFields';

export const handleCoverLetterChange = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  setCoverLetter: React.Dispatch<React.SetStateAction<string>>
) => {
  let value = event.target.value;
  // Allow a single trailing space but prevent multiple trailing spaces
  value = value.replace(/\s{2,}$/, ' ');
  setCoverLetter(value);
};

export const handleCompanyNameChange = (
  event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  setCompanyName: React.Dispatch<React.SetStateAction<string>>
) => {
  const target = event.target as HTMLInputElement;
  setCompanyName(target.value);
};

/** Make this reusable for making custom properties */
export const handleSubmit = (
  coverLetter: string,
  companyName: string,
  setModifiedLetter: React.Dispatch<React.SetStateAction<string>>
) => {
  const replacedText = coverLetter.replace(/<companyname>/gi, companyName);
  setModifiedLetter(replacedText);
};

// export const parseAndReplaceTemplate = (coverLetter: string, fields: Field[]) => {
//   let modifiedTemplate = coverLetter;

//   fields.forEach(field => {
//     // Create a regular expression that includes the angle brackets
//     const placeholder = new RegExp(field.name, 'g');
//     modifiedTemplate = modifiedTemplate.replace(placeholder, field.value);
//   });

//   return modifiedTemplate; // Return the modified template
// };

type companyType = { name: '<companyname>'; value: string };

export const parseAndReplaceTemplate = (
  coverLetter: string,
  companyName: companyType,
  fieldNames: Field[],
  fieldValues: string[]
) => {
  let modifiedTemplate = coverLetter;

  // Replace company name placeholder
  const companyNamePlaceholder = new RegExp(companyName.name, 'g');
  modifiedTemplate = modifiedTemplate.replace(
    companyNamePlaceholder,
    companyName.value
  );

  // Replace other placeholders
  fieldNames.forEach((field, index) => {
    if (fieldValues[index] !== undefined) {
      const placeholder = new RegExp(field.name, 'g');
      modifiedTemplate = modifiedTemplate.replace(
        placeholder,
        fieldValues[index]
      );
    }
  });

  return modifiedTemplate;
};
