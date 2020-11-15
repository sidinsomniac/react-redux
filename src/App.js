import React from "react";
import "./styles.css";
import Cake from "./components/Cake";
import Icecream from "./components/Icecream";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
        <Icecream />
      </div>
    </Provider>
  );
}
