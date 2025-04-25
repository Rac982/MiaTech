import { Component, useState, useEffect, useRef } from 'react';
import './index.css';

const ItemList = ({ items }) =>{
  return (
    <ul>
      {
        items.map((item, index) => (
          <li key={`item-${index}`}>{item}</li>
        ))
      }
    </ul>
  )
}

const Card = ({ children }) => {
  return (
    <div className="custom-card">
      {children}
    </div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("black");
  const [form, setForm] = useState({
    textInput: "",
    username: "",
    password: "",
  });
  const inputRef = useRef(null);
  const fruits = ["Apple", "Cherry", "Strawberry", "Pineapple", "Peach"];

  const toggleCounterIncrement = () => {
    setCounter(counter + 1);
  };
  const toggleCounterDecrement = () => {
    setCounter(counter - 1);
  };

  const toggleCounterReset = () => {
    setCounter(0);
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  useEffect(() => {
    setColor(getRandomColor());
  }, [counter]);

  const handleInput = (event) => {
    const { name, value } = event.target;

    setForm((_form) => ({
      ..._form,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(form);
  }

  const submitAlert = () => {
    alert(`Username: ${form.username} - Password: ${form.password}`);
  }

  const uncontrolledInputAlert = () => {
    alert(`Hai inserito: ${inputRef.current.value}`);
  }

  return (
    <>
      <h1 style={{ color: color }}>Contatore</h1>
      <div>
        <button className='button' onClick={toggleCounterDecrement}>
          -
        </button>
        <h2>Counter: {counter}</h2>
        <button className='button' onClick={toggleCounterIncrement}>
          +
        </button>
        <button className='button' onClick={toggleCounterReset}>
          Reset
        </button>
      </div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="textInput" placeholder="Text Input" value={form.textInput} onInput={handleInput} />
        <input type="username" name="username" placeholder="Username" value={form.username} onInput={handleInput} />
        <input type="password" name="password" placeholder="Password" value={form.password} onInput={handleInput} />
        <input type="text" ref={inputRef} name="uncontrolledInput" placeholder="Uncontrolled Input" />

        <button className='button' type='submit' onClick={submitAlert}>Login</button>
        <button className='button' onClick={uncontrolledInputAlert}>Ref Button</button>
      </form>
      <div>
        <h2>Fruits list</h2>
        <ItemList items={fruits} />
      </div>
      <Card>
        <h3>Title</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, tempora numquam magni qui commodi laboriosam officiis nam illo, id quia, iure vero eveniet architecto et perspiciatis! Quos quae vitae labore.</p>
      </Card>
    </>
  )
}

export default App;


/* FUNCTION COMPONENT
const HelloWorld = ({ content }) => {
  return (
    <h1>{content}</h1>
  )
}

const App = () => {
  return (
    <>
      <div>
        <HelloWorld content="Hello World!" />
      </div>
    </>
  )
} */


/* CLASS COMPONENT
class App extends Component {

  title = "Hello World!";

  render() {
    return (
      <>
        <h1>{this.title}</h1>
      </>
    )
  }
}

export default App; */