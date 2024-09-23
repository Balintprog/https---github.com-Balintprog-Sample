import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Subsite from './Subsite';
import Site from './Site';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Site />}></Route>
        <Route path="/subsite" element={<Subsite />}></Route>
      </Routes>
    </>
  );
};

export default App;
