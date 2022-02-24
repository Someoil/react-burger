import React from 'react';

import '../../styles/reset.scss'; 
import '../../styles/main.scss'; 
import clsx from 'clsx';

import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';

import Data from "../../utils/data.json";

function App() {  
  return (
    <div>
      <AppHeader />
      <main>
        <div className={clsx('container')}>
          <h1 className={clsx('text text_type_main-large mt-10 mb-5')}>Соберите бургер</h1>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <BurgerIngredients ingredients={Data}/>
            <BurgerConstructor ingredients={Data}/>
          </div>
        </div>
       
      </main>
    </div>
  );
}

export default App;
