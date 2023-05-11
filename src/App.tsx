import { FC } from "react";
import "./scss/app.scss";
import { Header } from "./Header";
import { Categories } from "./components/Categories";
import { Sort } from "./components/Sort";
import { PizzaCard } from "./components/PizzaCard";

const App: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All Pizzas</h2>
          <div className="content__items">
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
