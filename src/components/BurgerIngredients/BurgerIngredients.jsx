import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredients.module.scss';
import clsx from 'clsx';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from './BurgerIngredient';
import {IngredientsPropTypes} from '../../utils/IngredientsPropTypes';
function BurgerIngredients ({ingredients}){
    const [current, setCurrent] = React.useState('one')
    return (
      <section className={clsx(styles.section, 'mb-10')}>
        <div className={'flex mb-10'}>
          <Tab value="one" className={clsx('ji')} active={current === 'one'} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={clsx(styles.scroll)}>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <div className={clsx(styles.wrap, 'mb-10')}>
            {ingredients.map((ingredient)=>{
              if(ingredient.type==='bun') return <BurgerIngredient className={styles.wrap} ingredient={ingredient} onClick='' key={ingredient._id}/>
            }         
            )}
          </div>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <div className={clsx(styles.wrap, 'mb-10')}>
            {ingredients.map((ingredient)=>{
              if(ingredient.type==='sauce') return <BurgerIngredient ingredient={ingredient} onClick='' key={ingredient._id}/>
            }         
            )}
          </div>
          <h2 className="text text_type_main-medium mb-6">Начинки</h2>
          <div className={clsx(styles.wrap, 'mb-10')}>
            {ingredients.map((ingredient)=>{
              if(ingredient.type==='main') return <BurgerIngredient ingredient={ingredient} onClick='' key={ingredient._id}/>
            }         
            )}
          </div>
        </div>
      </section>
    );
}
BurgerIngredients.propTypes = {
  ingredients: IngredientsPropTypes
}
export default BurgerIngredients;