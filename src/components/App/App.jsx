import React, { useEffect, useState } from "react";
import "../../styles/reset.scss";
import "../../styles/main.scss";
import styles from "./App.module.scss";
import clsx from "clsx";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

import Data from "../../utils/data.json";

function App() {
  const dataUrl = "https://norma.nomoreparties.space/api/ingredients";
  const [dataApi, setDataApi] = useState([]);
  const fetchData = () => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((responce) => {
        setDataApi(responce.data);
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
      {dataApi.length && <main>
        <div className={clsx("container")}>
          <h1 className={clsx("text text_type_main-large mt-10 mb-5")}>
            Соберите бургер
          </h1>
          <div className={clsx(styles.content)}>
            <BurgerIngredients ingredients={dataApi} />
            <BurgerConstructor ingredients={dataApi} />
          </div>
        </div>
      </main>}
    </div>
  );
}

export default App;
