import React, { useContext } from "react";
import clsx from "clsx";

import BurgerIngredient from "./burger-ingredient";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import { IngredientsContext } from "../../utils/appContext";

import styles from "./burger-ingredients.module.scss";

function BurgerIngredients() {
  const [currentTab, setCurrentTab] = React.useState("bun");
  const ingredients = useContext(IngredientsContext);
  function onTabClick(tab) {
    setCurrentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section className={clsx(styles.section, "mb-10")}>
      <div className={clsx(styles.tabs, "mb-10")}>
        <Tab value="bun" active={currentTab === "bun"} onClick={onTabClick}>
          Булки
        </Tab>
        <Tab value="sauce" active={currentTab === "sauce"} onClick={onTabClick}>
          Соусы
        </Tab>
        <Tab value="main" active={currentTab === "main"} onClick={onTabClick}>
          Начинки
        </Tab>
      </div>
      <div className={clsx(styles.scroll)}>
        <h2 className="text text_type_main-medium mb-6" id="bun">
          Булки
        </h2>
        <div className={clsx(styles.wrap, "mb-10")}>
          {ingredients.map((ingredient) => {
            if (ingredient.type === "bun")
              return (
                <BurgerIngredient
                  className={styles.wrap}
                  ingredient={ingredient}
                  key={ingredient._id}
                />
              );
          })}
        </div>
        <h2 className="text text_type_main-medium mb-6" id="sauce">
          Соусы
        </h2>
        <div className={clsx(styles.wrap, "mb-10")}>
          {ingredients.map((ingredient) => {
            if (ingredient.type === "sauce")
              return (
                <BurgerIngredient
                  ingredient={ingredient}
                  key={ingredient._id}
                />
              );
          })}
        </div>
        <h2 className="text text_type_main-medium mb-6" id="main">
          Начинки
        </h2>
        <div className={clsx(styles.wrap, "mb-10")}>
          {ingredients.map((ingredient) => {
            if (ingredient.type === "main")
              return (
                <BurgerIngredient
                  ingredient={ingredient}
                  key={ingredient._id}
                />
              );
          })}
        </div>
      </div>
    </section>
  );
}

export default BurgerIngredients;
