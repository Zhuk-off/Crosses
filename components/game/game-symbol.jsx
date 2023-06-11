import clsx from 'clsx';
import { SYMBOL_O, SYMBOL_X } from './constants';

export function GameSymbol({ symbol }) {
  // const getSymbolClassName = (symbol) => {
  //   if (symbol === SYMBOL_O) return 'text-red-600';
  //   if (symbol === SYMBOL_X) return 'text-red-600';
  //   return '';
  // };
  return (
    <span
      className={clsx(
        'text-xl leading-6',
        symbol === SYMBOL_O && 'text-green-600',
        symbol === SYMBOL_X && 'text-red-600'
      )}
    >
      {symbol}
    </span>
  );
}
