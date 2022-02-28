import React from "react";
import styles from "./IngredientDetails.module.scss";
import clsx from "clsx";

function IngredientDetails({ ingredient }) {
  return (
    <div className={clsx(styles.wrap, "pb-5")}>
      <img
        className={clsx(styles.img, "mb-4")}
        src={ingredient.image_large}
        alt=""
      />
      <h3 className={clsx(styles.title, "mb-8 text text_type_main-medium")}>
        {ingredient.name}
      </h3>
      <ul className={clsx(styles.info)}>
        <li
          className={clsx(
            styles.info_item,
            "text text_type_main-default text_color_inactive"
          )}
        >
          Калории,ккал
          <br />
          <span className=" text_type_digits-default">
            {ingredient.calories}
          </span>
        </li>
        <li
          className={clsx(
            styles.info_item,
            "text text_type_main-default text_color_inactive"
          )}
        >
          Белки, г<br />
          <span className=" text_type_digits-default">
            {ingredient.proteins}
          </span>
        </li>
        <li
          className={clsx(
            styles.info_item,
            "text text_type_main-default text_color_inactive"
          )}
        >
          Жиры, г<br />
          <span className=" text_type_digits-default">{ingredient.fat}</span>
        </li>
        <li
          className={clsx(
            styles.info_item,
            "text text_type_main-default text_color_inactive"
          )}
        >
          Углеводы, г<br />
          <span className=" text_type_digits-default">
            {ingredient.carbohydrates}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
