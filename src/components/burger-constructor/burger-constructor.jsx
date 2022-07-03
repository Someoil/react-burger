import React, { useContext, useState, useEffect } from "react";
import clsx from "clsx";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { IngredientsContext } from "../../utils/appContext";
import { ORDERS_DATA_URL } from "../../utils/constans";

import styles from "./burger-constructor.module.scss";

function BurgerConstructor() {
  let bunSum = 0;
  const ingredients = useContext(IngredientsContext).filter(function (item) {
    if ((item.type === "bun" && bunSum === 0) || item.type !== "bun") {
      if (item.type === "bun") bunSum++;
      return item;
    }
  });

  const [order, setOrder] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function sendOrder() {
    const ingredientsIds = ingredients.map((item) => item._id);
    const data = JSON.stringify({ ingredients: ingredientsIds });
    const fetchOrder = () => {
      fetch(ORDERS_DATA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: data,
      })
        .then((response) => response.json())
        .then((responce) => {
          setOrder(responce);
          setIsModalOpen(true);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchOrder();
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {}, []);

  const tradingPrice = (arr) =>
    arr.reduce((sum, current) => {
      if (current.type === "bun") return sum + current.price * 2;
      return sum + current.price;
    }, 0);

  return (
    <section className={clsx(styles.section)}>
      <div className={clsx(styles.constructor)}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={ingredients[0].name + " (верх)"}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
        <div className={styles.scroll}>
          <div className={styles.drop}>
            {ingredients.map((ingredient) => {
              if (ingredient.type !== "bun") {
                return (
                  <div className={styles.element} key={ingredient._id}>
                    <DragIcon />
                    <ConstructorElement
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={ingredients[0].name + " (низ)"}
          price={ingredients[0].price}
          thumbnail={ingredients[0].image}
        />
      </div>

      <div className={clsx(styles.bottom, "mt-10 mr-10")}>
        <div className={clsx(styles.price, "mr-10")}>
          <span className="text text_type_digits-medium mr-2">
            {tradingPrice(ingredients)}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={sendOrder}>
          Оформить заказ
        </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails orderNumber={order.order.number} />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
