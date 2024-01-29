import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewCurrentScreen from './ViewCurrentScreen';
import CreateNewScreen from './CreateNewScreen';
import Header from './Header';
import Footer from './Footer';
import HowToUse from './HowToUse';

const MainContainer = () => {
  const [coverLetter, setCoverLetter] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [modifiedLetter, setModifiedLetter] = useState('');

  return (
    <div className="main-container">
      <Header onHowToUseClick={() => {}} />
      <Routes>
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route
          path="/generate"
          element={
            <ViewCurrentScreen
              modifiedLetter={modifiedLetter}
              setModifiedLetter={setModifiedLetter}
            />
          }
        />
        <Route
          path="/"
          element={
            <CreateNewScreen
              setModifiedLetter={setModifiedLetter}
              coverLetter={coverLetter}
              setCoverLetter={setCoverLetter}
              companyName={companyName}
              setCompanyName={setCompanyName}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainContainer;
