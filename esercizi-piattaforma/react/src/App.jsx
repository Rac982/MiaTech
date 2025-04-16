import { Component } from 'react';
import './App.css'

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


// CLASS COMPONENT
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

export default App;
