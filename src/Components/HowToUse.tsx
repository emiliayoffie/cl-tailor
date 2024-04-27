import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

type howToUseProps = {
  toggleInstructions: boolean;
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
};

const HowToUse = ({
  toggleInstructions,
  setShowInstructions,
}: howToUseProps) => {
  const theme = useTheme();
  const light = true;
  return (
    <div >
      <h1
        style={{
          color: theme.palette.text.primary,
          marginTop: '10px',
          marginBottom: '10px',
          fontSize: '2em',
        }}
      >
        <span style={{ fontWeight: 'normal', color: light ? theme.palette.text.primary : theme.palette.secondary.main }}>Personalize your </span>
        <span style={{ fontWeight: 'bold', color: theme.palette.primary.main }}>cover letters</span>
        <br />
        <span
          style={{
            fontWeight: 'normal',
            display: 'block',
            lineHeight: '1.4em',
          }}
        >
          faster than ever.
        </span>
      </h1>
      <p
        onClick={() => setShowInstructions(!toggleInstructions)}
        style={{ cursor: 'pointer', marginBottom: '20px', marginTop: '20px', color: theme.palette.primary.main }}
      >
        How does it work?
      </p>

      {toggleInstructions && (
    <ol style={{ /* styles for ordered list */ }}>
      <li>
        Begin by pasting your cover letter template into the provided area. Make sure to mark any customizable elements, such as the company name or job title, with placeholders. Use <strong>{'<placeholder>'}</strong> for generic placeholders.
      </li>
      <li>
        Replace placeholders with specific details. For example, use <strong>{'<companyname>'}</strong> where you want the company's name to appear, then type the company's name and any other specific details into the provided fields.
      </li>
      <li>
        As you fill in these fields, your tailored cover letter will automatically update itself, ready for you to review, copy/download, and use in your job application. This tool helps you quickly personalize your cover letters for different applications without manually editing each one.
      </li>
    </ol>
  )}
</div>
  );
};

export default HowToUse;
