import React from 'react';
import styles from './BurgerIngredient.module.scss';
import clsx from 'clsx';

import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredient ({ingredient, onClick}){
    return (
      <article className={clsx(styles.item)}>
        <img className={clsx(styles.image, 'ml-4 mr-4 mb-1')} src={ingredient.image} alt="" />
        <div className={clsx('flex-center mb-1')}>
          <span className={clsx(styles.price, 'text text_type_digits-default mr-2')}>{ingredient.price}</span><CurrencyIcon type="primary" />
        </div>
        <h3 className={clsx('')}>{ingredient.name}</h3>
        <Counter className={clsx(styles.count)} count={1} size="default" />
      </article>
    );
}

export default BurgerIngredient;
