import { useState, useRef } from 'react';

const Form = () => {
  const [form, setForm] = useState({
    textInput: "",
    username: "",
    password: "",
  });
  const inputRef = useRef(null);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const submitAlert = () => {
    alert(`Username: ${form.username} - Password: ${form.password}`);
  };

  const uncontrolledInputAlert = () => {
    alert(`Hai inserito: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input className="m-1 p-1" type="text" name="textInput" placeholder="Text Input" value={form.textInput} onInput={handleInput} />
        <input className="m-1 p-1" type="text" name="username" placeholder="Username" value={form.username} onInput={handleInput} />
        <input className="m-1 p-1" type="password" name="password" placeholder="Password" value={form.password} onInput={handleInput} />
        <input className="m-1 p-1" type="text" ref={inputRef} name="uncontrolledInput" placeholder="Uncontrolled Input" />

        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" type="submit" onClick={submitAlert}>Login</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition" type="button" onClick={uncontrolledInputAlert}>Ref Button</button>
      </form>
    </div>
  );
};

export default Form;