import React from 'react';
import '../Homepage/HomepageStyle.scss';
import Directory from '../../components/directory-menu/directorylist_comp';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default HomePage;
