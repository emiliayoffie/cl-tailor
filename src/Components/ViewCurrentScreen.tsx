import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import GroupSizesColors from './Buttons/GroupSizesColors';

type ViewCurrentScreenProps = {
  modifiedLetter: string;
  setModifiedLetter: React.Dispatch<React.SetStateAction<string>>;
};

const ViewCurrentScreen = ({
  modifiedLetter,
  setModifiedLetter,
}: ViewCurrentScreenProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(modifiedLetter);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy text.');
    }
  };

  const handleModifiedLetterChange = (e) => {
    setModifiedLetter(e.target.value);
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.setFont('Helvetica');
    pdf.setFontSize(11);
    pdf.setLineWidth(1);
    pdf.text(modifiedLetter, 20, 30, { align: 'left', maxWidth: 170 });
    pdf.save('cover-letter.pdf');
  };

  const buttons = [
    <Button key="download" onClick={downloadPDF}>
      Download PDF
    </Button>,
    <Button key="new" onClick={() => navigate('/')}>
      Create New
    </Button>,
  ];

  return (
    <div className="container">
      <GroupSizesColors buttons={buttons} />
      {modifiedLetter && (
        <>
          <Box
            component="form"
            sx={{
              position: 'relative',
              '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-static"
              label="Modified Letter"
              multiline
              value={modifiedLetter}
              onChange={handleModifiedLetterChange}
              variant="outlined"
              fullWidth
              InputProps={{
                style: { minHeight: '100px' },
              }}
            />
            <Tooltip title={isCopied ? 'Copied!' : 'Copy to Clipboard'}>
              <IconButton
                sx={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  color: isCopied ? 'green' : 'inherit',
                }}
                onClick={copyToClipboard}
              >
                {isCopied ? (
                  <CheckCircleOutlineIcon />
                ) : (
                  <FileCopyOutlinedIcon />
                )}
              </IconButton>
            </Tooltip>
          </Box>
        </>
      )}
    </div>
  );
};

export default ViewCurrentScreen;
