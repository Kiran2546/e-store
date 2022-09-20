import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePagePreview from './views/HomePreview/home-preview';
import CollectionPagePreview from './views/CollectionPreview/collection-preview';

/* const Hatpage = () => {
  return (
    <div className='Hat-main'>
      <h1>whoamI: Hat page</h1>
    </div>
  );
}; */

function App() {
  return (
    <div className='App-main'>
      <Routes>
        <Route path='/' element={<HomePagePreview />}></Route>
        <Route path='/shop' element={<CollectionPagePreview />}></Route>
      </Routes>
    </div>
  );
}

export default App;
