import React, { useEffect, useState } from "react";
import clsx from "clsx";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import { IngredientsContext } from "../../utils/appContext";
import { BASE_URL } from "../../utils/constans";
import { checkResponse } from "../../utils/functions";

import "../../styles/reset.scss";
import "../../styles/main.scss";
import styles from "./app.module.scss";

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const fetchData = () => {
    fetch(BASE_URL + "/ingredients")
      .then(checkResponse)
      .then((responce) => {
        setIngredientsData(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <AppHeader />
      {ingredientsData.length && (
        <main>
          <div className={clsx("container")}>
            <h1 className={clsx("text text_type_main-large mt-10 mb-5")}>
              Соберите бургер
            </h1>
            <div className={clsx(styles.content)}>
              <IngredientsContext.Provider value={ingredientsData}>
                <BurgerIngredients />
                <BurgerConstructor />
              </IngredientsContext.Provider>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
