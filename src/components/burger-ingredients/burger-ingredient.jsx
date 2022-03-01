import React, { useState } from "react";

import Modal from "../modal/modal";
import clsx from "clsx";
import { IngredientPropType } from "../../utils/ingredientsPropTypes";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredient.module.scss";

function BurgerIngredient({ ingredient }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function showModal() {
    setIsModalOpen(true);
  };
  function closeModal(){
    setIsModalOpen(false);
  };

  return (
    <>
      <article className={clsx(styles.item, "mb-8")} onClick={showModal}>
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
        <h3>{ingredient.name}</h3>
        <Counter className={clsx(styles.count)} count={1} size="default" />
      </article>
      {isModalOpen && (
        <Modal
          title="Детали ингредиента"
          ingredient={ingredient}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
}
BurgerIngredient.propTypes = {
  ingredient: IngredientPropType.isRequired,
};
export default BurgerIngredient;
