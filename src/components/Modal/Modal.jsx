import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

import clsx from "clsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "./ModalOverlay";

function Modal({ title, ingredient, isOpen, onClose }) {
  React.useEffect(() => {
    function closeOnEscape(event) {
      if (event.keyCode === 27) {
        console.log(123);
        onClose();
      }
    }

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay  onClick={onClose}/>
      <article className={clsx(styles.modal, "p-10")}>
        <div className={clsx(styles.title)}>
          <h2 className={clsx("text text_type_main-medium")}>{title}</h2>
          <CloseIcon type="primary" onClick={onClose} />
        </div>
        {/* .info */}
      </article>
    </>,
    document.body
  );
}

export default Modal;
