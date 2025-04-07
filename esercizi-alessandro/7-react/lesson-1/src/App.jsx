import { useState } from "react";

const App = () => {
  const title = "Hello World!";
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aut.";
  const [lng, setLng] = useState(10);
  const [count, setCount] = useState(0);

  const formatText = (str, lng) => {
    if (str.length > lng) {
      return str.substring(0, lng) + "...";
    } else {
      return str;
    }
  };

  const toggleShowMore = () => {
    if (lng == 10) {
      setLng(text.length);
    } else {
      setLng(10);
    }
  };

  const toggleCounter = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <p>{formatText(text, lng)}</p>
      <button onClick={toggleShowMore}>
        {lng == 10 ? "Show More" : "Show Less"}
      </button><br /><br />
      <button onClick={toggleCounter}>
        Aggiungi una unità
      </button>
      <span>{count}</span>
    </> //fragment <>...</>
  );
};

export default App;