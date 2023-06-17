import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <>
      <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
        Ход: <GameSymbol symbol={currentMove} className={"h-5 w-5"} />
      </div>
      <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
        Следующий: <GameSymbol symbol={nextMove} className={"h-3 w-3"} />
      </div>
    </>
  );
}
