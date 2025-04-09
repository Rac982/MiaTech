import { useState } from "react";
import ShowButton from "./components/ShowButton";
import React from "react";

const App = () => {
  const title = "Hello World!";
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, aut.";
  const [lng, setLng] = useState(10);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  }

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  /*   return (
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
    ); */

  return (
    <>
      <h1>{title}</h1>
      <p>{formatText(text, lng)}</p>
      <ShowButton
        isActive={lng == 10}
        activeLable="Show More"
        inactiveLable="Show Less"
        onClick={toggleShowMore}
      /><br /><br />
      <button onClick={toggleCounter}>
        Aggiungi una unità
      </button>
      <span>{count}</span>
      <br /><br />
      <div>
        <ShowButton
          isActive={isVisible}
          activeLable="Hide"
          inactiveLable="Show"
          onClick={toggleIsVisible}
        />
        {
          isVisible && (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat sunt recusandae excepturi distinctio saepe dicta dolores alias pariatur minus quo mollitia beatae nisi facilis assumenda atque, illum ratione veniam?</p>
          )
        }
      </div><br /><br />
      <div className="accordion">
        <ShowButton
          isActive={isOpen}
          activeLable={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 432c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0zm64-16c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM224 352c-6.7 0-13-2.8-17.6-7.7l-104-112c-6.5-7-8.2-17.2-4.4-25.9s12.5-14.4 22-14.4l208 0c9.5 0 18.2 5.7 22 14.4s2.1 18.9-4.4 25.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7z"/></svg>
          }
          inactiveLable={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 64c6.7 0 13 2.8 17.6 7.7l104 112c6.5 7 8.2 17.2 4.4 25.9s-12.5 14.4-22 14.4l-208 0c-9.5 0-18.2-5.7-22-14.4s-2.1-18.9 4.4-25.9l104-112c4.5-4.9 10.9-7.7 17.6-7.7z"/></svg>
          }
          onClick={toggleIsOpen}
        />
        {
          isOpen && (
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat sunt recusandae excepturi distinctio saepe dicta dolores alias pariatur minus quo mollitia beatae nisi facilis assumenda atque, illum ratione veniam?</p>
          )
        }
      </div><br /><br />

    </> //fragment <>...</>
  );
};

export default App;