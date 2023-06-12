import clsx from "clsx";
import React from "react";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  console.log(cells);
  return (
    <div
      className={clsx(
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
        className
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="mr-auto">
          <div className="flex items-center gap-1 text-xl font-semibold leading-tight">
            Ход: <ZeroIcon className={"h-5 w-5"} />
          </div>
          <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Следующий: <CrossIcon />
          </div>
        </div>
        <UiButton className="" size="md" variant="primary">
          Ничья
        </UiButton>
        <UiButton className="" size="md" variant="outline">
          Сдаться
        </UiButton>
      </div>
      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px) pl-px pt-px mt-3">
        {cells.map((_, index) => (
          <button
            key={index}
            className="border border-slate-200 h-[30px] w-[30px] -ml-px -mt-px flex items-center justify-center"
          >
            <ZeroIcon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </div>
  );
}
