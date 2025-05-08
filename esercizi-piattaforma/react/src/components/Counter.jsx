import { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('black');

  const toggleCounterIncrement = () => setCounter(counter + 1);
  const toggleCounterDecrement = () => setCounter(counter - 1);
  const toggleCounterReset = () => setCounter(0);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    setColor(getRandomColor());
  }, [counter]);

  return (
    <div className="flex flex-col items-center p-8 space-y-6">
      <h1 className="text-3xl font-bold" style={{ color: color }}>Contatore</h1>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={toggleCounterDecrement}
          >
            -
          </button>
          <h2 className="text-2xl font-semibold">Counter: {counter}</h2>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={toggleCounterIncrement}
          >
            +
          </button>
        </div>
        <button
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
          onClick={toggleCounterReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;