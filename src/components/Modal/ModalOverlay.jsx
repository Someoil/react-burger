import React from "react";
import styles from "./ModalOverlay.module.scss";

function ModalOverlay({ onClick }) {
  return <div className={styles.overlay} onClick={onClick}></div>;
}

export default ModalOverlay;
