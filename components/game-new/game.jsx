import { BackLink } from "./ui/back-link";
import { PLAYERS } from "./constants";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameCell } from "./ui/game-cell";
import GameOverModal from "./ui/game-over-modal";
import { useReducer } from "react";
import { GAME_STATE_ACTIONS, gameStateReduser, initGameState } from "./model/game-state-reducer";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computeWinner } from "./model/compute-winner";
import { getNextMove } from "./model/get-next-move";

const PLAYERS_COUNT = 2;

export function Game() {
  const [gameState, dispatch] = useReducer(
    gameStateReduser,
    { playersCount: PLAYERS_COUNT },
    initGameState
  );

  const winnerSequence = computeWinner(gameState);
  const nextMove = getNextMove(gameState, []);
  const winnerSymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnerSymbol);

  const { cells, currentMove } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        title={<GameTitle />}
        gameInfo={
          <GameInfo isRatingGame playersCount={4} timeMode={"1 мин. на ход"} />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            seconds={60}
            rating={player.rating}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCell
            key={index}
            onClick={() =>
              dispatch({ type: GAME_STATE_ACTIONS.CELL_CLICK, index })
            }
            isWinner={winnerSequence?.includes(index)}
            disabled={!!winnerSymbol}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            seconds={60}
            rating={player.rating}
            symbol={player.symbol}
            isRight={index % 2 === 1}
          />
        ))}
      />
    </>
  );
}
