import { useTheme } from '@mui/material/styles';

const HowToUse = () => {
  const theme = useTheme();

  return (
    <div className="container">
      <div className="how-to-use" style={{ color: theme.palette.text.primary }}>
        This is NOT a cover letter generator. This is a Cover Letter Tailor.
        This app is meant to be used in conjunction with your own template. Once
        you've provided the template and the company name, and this app will
        generate a cover letter that is tailored to the company. Make sure to
        place `{'<companyname>'}` in your template where you want the company
        name to appear. For example, if you're applying to Google, you'd provide
        the following template, this app will replace `{'<companyname>'}` with
        "Google" in the generated cover letter: "I am applying for the Software
        Engineer II position at {'<companyname>'}."
      </div>
    </div>
  );
};

export default HowToUse;
