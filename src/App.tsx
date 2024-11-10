import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Subsite from './Subsite';
import Site from './Site';
import LearningSite from './LearningSite';
import HashCode from './HashCode';
import Stopper from './Stopper';
import Weather from './Weather';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Site />}></Route>
        <Route path="/subsite" element={<Subsite />}></Route>
        <Route path="/learning" element={<LearningSite />}></Route>
        <Route path="/hash" element={<HashCode />}></Route>
        <Route path="/time" element={<Stopper />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
      </Routes>
    </>
  );
};

export default App;
