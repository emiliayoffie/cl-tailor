import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { Icon } from '@mui/material';
import { jsPDF } from 'jspdf';

type ViewCurrentScreenProps = {
  modifiedLetter: string;
  setModifiedLetter: React.Dispatch<React.SetStateAction<string>>;
  resetFields: React.Dispatch<React.SetStateAction<string>>;
};

const ViewCurrentScreen = ({
  modifiedLetter,
  setModifiedLetter,
}: ViewCurrentScreenProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const theme = useTheme();

  const downloadPDF = () => {
    try {
      const pdf = new jsPDF();
      pdf.setFont('Helvetica');
      pdf.setFontSize(11);
      pdf.setLineWidth(1);
      pdf.text(modifiedLetter, 20, 30, { align: 'left', maxWidth: 170 });
      pdf.save('cover-letter.pdf');
      setIsDownloaded(true);
      setTimeout(() => setIsDownloaded(false), 3000);
    } catch (err) {
      console.error('Failed to download: ', err);
      alert('Failed to download PDF.');
    }
  };

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

  return (
    <TextField
      label="Modified Letter"
      multiline
      value={modifiedLetter}
      onChange={(e) => setModifiedLetter(e.target.value)}
      variant="outlined"
      fullWidth
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={isCopied ? "Copied!" : "Copy to clipboard"}>
              <IconButton onClick={copyToClipboard} color={isCopied ? "success" : "default"}>
                <FileCopyOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title={isDownloaded ? "Downloaded!" : "Download as PDF"}>
              <IconButton onClick={downloadPDF} color={isDownloaded ? "success" : "default"}>
                <FileDownloadIcon />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
      sx={{
        maxWidth: '75%',
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.23)' },
          '&:hover fieldset': { borderColor: theme.palette.primary.main },
          '&.Mui-focused fieldset': { borderColor: theme.palette.primary.main },
        },
      }}
    />
  );
};
export default ViewCurrentScreen;
