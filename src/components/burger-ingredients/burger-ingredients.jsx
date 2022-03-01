import React from "react";

import BurgerIngredient from "./burger-ingredient";
import clsx from "clsx";
import { IngredientsPropType } from "../../utils/ingredientsPropTypes";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.scss";

function BurgerIngredients({ ingredients }) {
  const [current, setCurrent] = React.useState("one");
  return (
    <section className={clsx(styles.section, "mb-10")}>
      <div className={clsx(styles.tabs, "mb-10")}>
        <Tab value="one" active={current === "one"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === "two"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === "three"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={clsx(styles.scroll)}>
        <h2 className="text text_type_main-medium mb-6">Булки</h2>
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
        <h2 className="text text_type_main-medium mb-6">Соусы</h2>
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
        <h2 className="text text_type_main-medium mb-6">Начинки</h2>
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
BurgerIngredients.propTypes = {
  ingredients: IngredientsPropType.isRequired,
};
export default BurgerIngredients;
