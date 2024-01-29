import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ViewCurrentScreen from './ViewCurrentScreen';
import CreateNewScreen from './CreateNewScreen';
import Header from './Header';
import Footer from './Footer';
import HowToUse from './HowToUse';

const MainContainer = () => {
  const [appState, setAppState] = useState('new');
  const [coverLetter, setCoverLetter] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [modifiedLetter, setModifiedLetter] = useState('');

  const switchToViewCurrentScreen = () => {
    setAppState('old');
  };

  const switchToCreateNewScreen = () => {
    setAppState('new');
    setCompanyName('');
  };

  return (
    <React.Fragment>
      <div className="main-container">
        <Header
          onHowToUseClick={() => {}}
          onToggleTheme={() => {}}
        />
        <Routes>
          <Route path="/how-to-use" element={<HowToUse />} />
          <Route path="/" element={
            appState === 'old' ? 
              <ViewCurrentScreen
                modifiedLetter={modifiedLetter}
                setModifiedLetter={setModifiedLetter}
                switchToCreateNewScreen={switchToCreateNewScreen}
              />
              : 
              <CreateNewScreen
                switchToViewCurrentScreen={switchToViewCurrentScreen}
                setModifiedLetter={setModifiedLetter}
                coverLetter={coverLetter}
                setCoverLetter={setCoverLetter}
                companyName={companyName}
                setCompanyName={setCompanyName}
              />
          } />
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default MainContainer;
