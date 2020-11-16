import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/icecream/icecreamActions";

export default function Icecream() {
  const [decreaseNumber, setDecreaseNumber] = useState(1);
  const numberOfIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice-creams: {numberOfIcecreams}</h2>
      <input
        value={decreaseNumber}
        onChange={(e) => {
          setDecreaseNumber(e.target.value);
          console.log(decreaseNumber);
        }}
      />
      <button onClick={() => dispatch(buyIcecream(decreaseNumber))}>
        Buy {decreaseNumber} ice-cream{decreaseNumber > 1 ? "s" : ""}
      </button>
    </div>
  );
}
