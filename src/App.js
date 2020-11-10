import React from "react";
import "./styles.css";
import Cake from "./components/Cake";
import { Provider } from "react-redux";
import store from "./redux/cake/store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
      </div>
    </Provider>
  );
}
