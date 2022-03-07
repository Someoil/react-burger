import React, { useEffect, useState } from "react";
import clsx from "clsx";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import "../../styles/reset.scss";
import "../../styles/main.scss";
import styles from "./app.module.scss";

const INGREDIENTS_DATA_URL = "https://norma.nomoreparties.space/api/ingredients";

function App() { 
  const [ingredientsData, setIngredientsData] = useState([]);
  const fetchData = () => {
    fetch(INGREDIENTS_DATA_URL)
      .then((response) => response.json())
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
      {ingredientsData.length && <main>
        <div className={clsx("container")}>
          <h1 className={clsx("text text_type_main-large mt-10 mb-5")}>
            Соберите бургер
          </h1>
          <div className={clsx(styles.content)}>
            <BurgerIngredients ingredients={ingredientsData} />
            <BurgerConstructor ingredients={ingredientsData} />
          </div>
        </div>
      </main>}
    </div>
  );
}

export default App;
