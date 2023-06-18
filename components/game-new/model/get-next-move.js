import { MOVE_ORDER } from "../constants";

export function getNextMove({ currentMove, playersCount, timers }) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => {
      console.log('symbmol', symbol)
      return timers[symbol] > 0}
  );
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}