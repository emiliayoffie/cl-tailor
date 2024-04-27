import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCurrentScreen from '../ViewCurrentScreen';
import CreateNewScreen from '../CreateNewScreen';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HowToUse from '../HowToUse';
// import CenterPageButtons from '../CenterPageButtons';

const MainContainer = () => {
  const [coverLetter, setCoverLetter] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [modifiedLetter, setModifiedLetter] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const resetFields = () => {
    setCoverLetter('');
    setCompanyName('');
    setModifiedLetter('');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.querySelectorAll('input').forEach((input) => {
        if (input.matches(':-webkit-autofill')) {
          input.classList.add('autofilled');
        }
      });
    }, 100);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="main-container">
      <Header />
      {/* <Routes>
        <Route path="/how-to-use" element={<HowToUse />} />
      </Routes> */}
      {/* <Route
          path="/generate"
          element={
            <ViewCurrentScreen
              modifiedLetter={modifiedLetter}
              setModifiedLetter={setModifiedLetter}
            />
          }
        /> */}
      {/* <Route
          path="/"
          element={ */}
      <div className="how-to-use">
        <HowToUse
          toggleInstructions={showInstructions}
          setShowInstructions={setShowInstructions}
        />
      </div>
      <div
        className="content-container"
        style={{
          marginTop: showInstructions ? '0' : '0px', // Adjust values as needed
          transition: 'margin-top 0.5s ease', // Smooth transition for the movement
        }}
      >
        <div className="container left-panel">
          <CreateNewScreen
            setModifiedLetter={setModifiedLetter}
            coverLetter={coverLetter}
            setCoverLetter={setCoverLetter}
            companyName={companyName}
            setCompanyName={setCompanyName}
          />
        </div>
        <div className="container right-panel">
          <ViewCurrentScreen
            modifiedLetter={modifiedLetter}
            setModifiedLetter={setModifiedLetter}
            resetFields={resetFields}
          />
        </div>
        {/* }
        /> */}
      </div>
      {/* <CenterPageButtons
          resetFields={resetFields}
          modifiedLetter={modifiedLetter}
          setModifiedLetter={setModifiedLetter}
        /> */}
      <Footer />
    </div>
  );
};

export default MainContainer;
