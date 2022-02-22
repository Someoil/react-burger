import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.scss';
import clsx from 'clsx';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from './BurgerIngredient';

function BurgerIngredients ({ingredients}){
    const [current, setCurrent] = React.useState('one')
    return (
      <section>
        <div style={{ display: 'flex' }} className={'mb-10'}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
       
      </section>
    );
}

export default BurgerIngredients;
