import React from "react";
import styles from "./BurgerIngredient.module.scss";
import clsx from "clsx";

import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientPropType } from "../../utils/ingredientsPropTypes";

function BurgerIngredient({ ingredient, onClick }) {
  return (
    <article className={clsx(styles.item, "mb-8")}>
      <img
        className={clsx(styles.image, "ml-4 mr-4 mb-1")}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={clsx("flex-center mb-1")}>
        <span
          className={clsx(styles.price, "text text_type_digits-default mr-2")}
        >
          {ingredient.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={clsx("")}>{ingredient.name}</h3>
      <Counter className={clsx(styles.count)} count={1} size="default" />
    </article>
  );
}
BurgerIngredient.propTypes = {
  ingredient: IngredientPropType.isRequired,
};
export default BurgerIngredient;
