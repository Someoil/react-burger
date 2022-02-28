import React from "react";
import styles from "./Modal.module.css";

import clsx from "clsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Modal() {
  return (
    <article className={clsx(styles.modal, "p-10")}>
      <div className={clsx(styles.title)}>
        <h2 className={clsx("text text_type_main-medium")}>
          Детали ингредиента
        </h2>
        <CloseIcon type="primary"/>
      </div>
    </article>
  );
}

export default Modal;
