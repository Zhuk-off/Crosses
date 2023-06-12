import clsx from "clsx";
import React, { useState } from "react";
import { UiButton } from "../uikit/ui-button";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";
import { GameSymbol } from "./game-symbol";
import useGameState from "./use-game-state";

export function GameField({ className }) {
  const { cells, currentMove, nextMove, handleCellClick } = useGameState();

  const actions = (
    <>
      <UiButton className="" size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton className="" size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell key={index} onClick={() => handleCellClick(index)}>
            {symbol && <GameSymbol symbol={symbol} className={"w-5 h-5"} />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
        className
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
          Ход: <GameSymbol symbol={currentMove} className={"h-5 w-5"} />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий: <GameSymbol symbol={nextMove} className={"h-3 w-3"} />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px) pl-px pt-px mt-3">
      {children}
    </div>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 h-[30px] w-[30px] -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}
