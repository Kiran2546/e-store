import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePagePreview from './views/HomePreview/home-preview';
import CollectionPagePreview from './views/CollectionPreview/collection-preview';
import Header from './components/Header/header-component';

const ContactPagePreview = () => {
  return (
    <div className='container'>
      <h1>I am contact page</h1>
    </div>
  );
};

function App() {
  return (
    <div className='App-main'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePagePreview />}></Route>
        <Route path='/shop' element={<CollectionPagePreview />}></Route>
        <Route path='/contact' element={<ContactPagePreview />}></Route>
      </Routes>
    </div>
  );
}

export default App;
