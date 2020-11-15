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
      <h2>Number of icecreams: {numberOfIcecreams}</h2>
      <input
        value={decreaseNumber}
        onChange={(e) => {
          setDecreaseNumber(e.target.value);
          console.log(decreaseNumber);
        }}
      />
      <button onClick={() => dispatch(buyIcecream(decreaseNumber))}>
        Buy {decreaseNumber} cakes
      </button>
    </div>
  );
}
