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
        <input type="text" name="textInput" placeholder="Text Input" value={form.textInput} onInput={handleInput} />
        <input type="text" name="username" placeholder="Username" value={form.username} onInput={handleInput} />
        <input type="password" name="password" placeholder="Password" value={form.password} onInput={handleInput} />
        <input type="text" ref={inputRef} name="uncontrolledInput" placeholder="Uncontrolled Input" />

        <button className="button" type="submit" onClick={submitAlert}>Login</button>
        <button className="button" type="button" onClick={uncontrolledInputAlert}>Ref Button</button>
      </form>
    </div>
  );
};

export default Form;