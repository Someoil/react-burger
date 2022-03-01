import React from "react";
import ReactDOM from "react-dom";

import ModalOverlay from "../modal-overlay/modal-overlay";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

import clsx from "clsx";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientPropType } from "../../utils/ingredientsPropTypes";

import styles from "./modal.module.scss";

const modalRoot = document.getElementById('modal-root');


function Modal({ title, isOpen, onClose, ingredient, isTypeOrder }) {
  React.useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <article className={clsx(styles.modal, "p-10")}>
        <div className={clsx(styles.title)}>
          <h2 className={clsx("text text_type_main-large")}>{title}</h2>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {ingredient && <IngredientDetails ingredient={ingredient} />}
        {isTypeOrder && <OrderDetails />}
      </article>
    </>,
    modalRoot
  );
}
Modal.propTypes = {
  ingredient: IngredientPropType,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isTypeOrder: PropTypes.bool,
};
export default Modal;
