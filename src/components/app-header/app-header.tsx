import React from 'react';
import styles from './app-header.module.css';

import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';


class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className={styles.nav + ' flex-between'}>
            <div style={{width: 'max-content'}}>
              <ul className={styles.menu + ' flex-center'}>
                <li><a className={'flex-center text text_type_main-default pt-3 pr-5 pb-4 mr-2'} href="">
                  <span className='flex-center mr-2'><BurgerIcon type="primary" /></span><span>Конструктор</span>
                </a></li>
                <li><a className={'flex-center text text_type_main-default text_color_inactive pl-5 pt-3 pr-5 pb-4'} href="">
                  <span className='flex-center mr-2'><ListIcon type="secondary" /></span><span>Лента заказов</span>
                </a></li>
              </ul>
            </div>
            <Logo />
            <div style={{width: 'max-content'}}>
              <a className={'flex-center text text_type_main-default text_color_inactive pl-5 pt-3 pb-4'} href="">
                  <span className='flex-center mr-2'><ProfileIcon type="secondary" /></span><span>Личный кабинет</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
