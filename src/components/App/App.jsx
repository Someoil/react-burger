import React from 'react';
import logo from '../../images/logo.svg';
import styles from './App.module.css';

import '../../styles/reset.scss'; 
import '../../styles/main.scss'; 
import clsx from 'clsx';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

import Data from "../../utils/data.json";

function App() {
  console.log(Data);
  
  return (
    <div>
      <AppHeader />
      <main>
        <div className="container">
          <h1 className={clsx('text text_type_main-large mt-10 mb-5')}>Соберите бургер</h1>
          <BurgerIngredients ingredient={Data}/>
        </div>
       
      </main>
    </div>
  );
}

export default App;
