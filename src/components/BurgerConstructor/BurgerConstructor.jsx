import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.scss';
import clsx from 'clsx';

import {ConstructorElement, Button, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerConstructor ({ingredients}){
    const tradingPrice = (arr) => arr.reduce((sum, current) => sum + current.price, 0);
    return (
      <section  className={clsx(styles.section)}>
        <div className={clsx(styles.constructor)}>
          <ConstructorElement 
            type="top"
            isLocked={true}
            text={ingredients[0].name}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
          <div className={styles.scroll}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className={styles.element}>
                  <DragIcon/>
                  <ConstructorElement
                  text={ingredients[1].name}
                  price={ingredients[1].price}
                  thumbnail={ingredients[1].image}
                />
              </div>
              <div className={styles.element}>
                  <DragIcon/>
                  <ConstructorElement
                  text={ingredients[2].name}
                  price={ingredients[2].price}
                  thumbnail={ingredients[2].image}
                />
              </div>
              <div className={styles.element}>
                  <DragIcon/>
                  <ConstructorElement
                  text={ingredients[3].name}
                  price={ingredients[3].price}
                  thumbnail={ingredients[3].image}
                />
              </div>
              <div className={styles.element}>
                  <DragIcon/>
                  <ConstructorElement
                  text={ingredients[4].name}
                  price={ingredients[4].price}
                  thumbnail={ingredients[4].image}
                />
              </div>
              <div className={styles.element}>
                  <DragIcon/>
                  <ConstructorElement
                  text={ingredients[5].name}
                  price={ingredients[5].price}
                  thumbnail={ingredients[5].image}
                />
              </div>
              <div className={styles.element}>
                  <DragIcon/>
                  <ConstructorElement
                  text={ingredients[6].name}
                  price={ingredients[6].price}
                  thumbnail={ingredients[6].image}
                />
              </div>
              <div className={styles.element}>
                  <DragIcon/>
                  <ConstructorElement
                  text={ingredients[1].name}
                  price={ingredients[1].price}
                  thumbnail={ingredients[1].image}
                />
              </div>
            </div>
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={ingredients[0].name}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
        </div>
        
        <div style={{display: 'flex', justifyContent: "flex-end"}} className='mt-10 mr-10'>
          <div className="price mr-10" style={{display: 'flex', justifyContent: "flex-end", alignItems: "center"}}>
            <span className="text text_type_digits-medium mr-2">
              {tradingPrice(ingredients)}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </section>
    );
}

export default BurgerConstructor;