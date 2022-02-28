import React from "react";
import styles from "./OrderDetails.module.scss";
import clsx from "clsx";
import OrderOkImg from "../../images/ok.svg";

function OrderDetails() {
  return (
    <div className={clsx(styles.wrap, "pb-20")}>
      <h2 className={clsx("mb-8 text text_type_digits-large")}>22022022</h2>
      <p className={clsx("mb-15 text text_type_main-medium")}>
        идентификатор заказа
      </p>
      <img className={clsx(styles.img, "mb-15")} src={OrderOkImg} alt="" />
      <p className={clsx("mb-2 text text_type_main-small")}>
        Ваш заказ начали готовить
      </p>
      <p className={clsx("text text_type_main-small text_color_inactive")}>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
