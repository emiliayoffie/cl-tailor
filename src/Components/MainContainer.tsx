import React, { useState } from 'react';
import ViewCurrentScreen from './ViewCurrentScreen';
import CreateNewScreen from './CreateNewScreen';

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
      {appState === 'old' ? (
        <ViewCurrentScreen
          modifiedLetter={modifiedLetter}
          setModifiedLetter={setModifiedLetter}
          switchToCreateNewScreen={switchToCreateNewScreen}
        />
      ) : (
        <CreateNewScreen
          switchToViewCurrentScreen={switchToViewCurrentScreen}
          setModifiedLetter={setModifiedLetter}
          coverLetter={coverLetter}
          setCoverLetter={setCoverLetter}
          companyName={companyName}
          setCompanyName={setCompanyName}
        />
      )}
    </React.Fragment>
  );
};

export default MainContainer;
