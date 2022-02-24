import React from "react";
import styles from "./AppHeader.module.css";

import clsx from "clsx";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className={clsx("flex-between")}>
          <div className={clsx(styles.linksWrap)}>
            <ul className={clsx("flex-center")}>
              <li>
                <a
                  className={
                    "flex-center text text_type_main-default pt-3 pr-5 pb-4 mr-2"
                  }
                  href=""
                >
                  <span className="flex-center mr-2">
                    <BurgerIcon type="primary" />
                  </span>
                  <span>Конструктор</span>
                </a>
              </li>
              <li>
                <a
                  className={
                    "flex-center text text_type_main-default text_color_inactive pl-5 pt-3 pr-5 pb-4"
                  }
                  href=""
                >
                  <span className="flex-center mr-2">
                    <ListIcon type="secondary" />
                  </span>
                  <span>Лента заказов</span>
                </a>
              </li>
            </ul>
          </div>
          <Logo />
          <div className={clsx(styles.linksWrap)}>
            <a
              className={clsx(
                styles.lk,
                "flex-center text text_type_main-default text_color_inactive pl-5 pt-3 pb-4"
              )}
              href=""
            >
              <span className="flex-center mr-2">
                <ProfileIcon type="secondary" />
              </span>
              <span>Личный кабинет</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
