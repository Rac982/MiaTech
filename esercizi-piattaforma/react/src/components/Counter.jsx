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
    <div>
      <h1 style={{ color: color }}>Contatore</h1>
      <div>
        <button className="button" onClick={toggleCounterDecrement}>-</button>
        <h2>Counter: {counter}</h2>
        <button className="button" onClick={toggleCounterIncrement}>+</button>
        <button className="button" onClick={toggleCounterReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;