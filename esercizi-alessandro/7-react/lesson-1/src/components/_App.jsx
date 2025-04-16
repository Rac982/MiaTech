import React, { useEffect, useState } from "react";

// COMPONENT WITH useEFFECT
/* Usi useEffect quando vuoi fare qualcosa dopo che il componente ha renderizzato, o in risposta
a un cambiamento di stato o props.
Serve ad esempio per:
- fare una fetch API
- interagire con il DOM
- settare un timer
- sincronizzare dati con qualcosa esterno a React */

const App = () => {
  const [counter, setCounter] = useState(0)
  const [open, setOpen] = useState(true)

  useEffect(() => { //callback sempre sincrone
    console.log("Component Updated")
  }) // La funzione dentro useEffect verrà eseguita ad ogni update di state

  useEffect(() => { //callback sempre sincrone
    console.log("Component Mounted")
  }, []) //array delle dipendenze, se vuoto la funzione dentro useEffect verrà eseguita solo al montaggio del componente

  useEffect(() => {
    console.log(`Counter Updated: ${counter}`)
  }, [counter]) // La funzione dentro useEffect verrà eseguita ad ogni update della dipendenza

  return (
    <>
      <button onClick={() => setCounter(c => c + 1)}>Counter: {counter}</button>
      <button onClick={() => setOpen(o => !o)}>Open: {JSON.stringify(open)}</button>
    </>
  );
};

export default App;