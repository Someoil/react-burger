import React from 'react';
import logo from '../../images/logo.svg';
import styles from './app.module.css';

import '../../styles/reset.scss'; 
import '../../styles/main.scss'; 

import AppHeader from '../app-header/app-header';

function App() {
  return (
    <div>
      <AppHeader />
    </div>
  );
}

export default App;
