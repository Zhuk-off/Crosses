import Image from "next/image";
import { GameSymbol } from "./game-symbol";
import avatarSrc from "./images/avatar-1.png";
import clsx from "clsx";

export function PlayerInfo({
  className,
  name,
  rating,
  avatar = avatarSrc,
  symbol,
  isTimerRunning,
  seconds,
  isRight,
}) {
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-300";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div
          className={
            "flex items-center gap-2 text-start text-teal-600 w-[200px]"
          }
        >
          <Image src={avatar} alt="avatar" width={48} height={48} />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="rounded-full h-5 w-5 bg-white shadow absolute -left-1 -top-1 flex items-center justify-center ">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
