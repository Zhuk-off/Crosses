import clsx from "clsx";
import { Profile } from "../profile/profile";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile className="" />
          <div className="rounded-full h-5 w-5 bg-white shadow absolute -left-1 -top-1 flex items-center justify-center ">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="text-slate-900 text-lg font-semibold">01:08</div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-orange-600 text-lg font-semibold">00:08</div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className="" />
          <div className="rounded-full h-5 w-5 bg-white shadow absolute -left-1 -top-1 flex items-center justify-center ">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
