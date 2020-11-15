import { BUY_ICECREAM } from "./icecreamTypes";

export const buyIcecream = (num = 1) => ({
  type: BUY_ICECREAM,
  payload: num
});
