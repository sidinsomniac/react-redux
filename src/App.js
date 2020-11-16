import React from "react";
import "./styles.css";
import Cake from "./components/Cake";
import Icecream from "./components/Icecream";
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
        <Icecream />
        <User />
      </div>
    </Provider>
  );
}
