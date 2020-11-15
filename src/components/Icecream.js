import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";

export default function Icecream() {
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of icecreams: {numberOfIcecreams}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy cakes</button>
    </div>
  );
}
