function ResetButton({onClick}) {
  return (
    <button
      className="pointer mt-3 bg-transparent border border-gray-700 py-2 px-3 rounded"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}

export default ResetButton;
