import useCounter from "../hooks/use-counter";

const Counter = ({ initialCount }) => {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <p>{count}</p>
      <button
        className=" bg-gray-800 rounded-xl p-2 text-white hover:text-lime-500 text-xs"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
