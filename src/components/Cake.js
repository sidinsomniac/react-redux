import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

export default function Cake() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
    </div>
  );
}
