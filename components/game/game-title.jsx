import Link from "next/link";
import React from "react";
import { ArrowLeftIcon } from "../game-new/ui/icons/arrow-left-icon";
import { StarIcon } from "../game-new/ui/icons/star-icon";
import { UserIcon } from "../game-new/ui/icons/user-icon";
import { HistoryIcon } from "../game-new/ui/icons/history-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="pl-2 leading-tight">
      <Link
        href={"#"}
        className="flex items-center gap-2 text-xs text-teal-600"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl ">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-xs text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon /> {playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon /> 1 мин на ход
        </div>
      </div>
    </div>
  );
}
