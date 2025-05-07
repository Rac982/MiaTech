import Counter from './components/Counter';
import TextInput from './components/TextInput';
import Form from './components/Form';
import FruitsList from './components/FruitsList';
import Card from './components/Card';
import ProductList from './components/ProductList';
import './index.css';

const App = () => {
  return (
    <>
      <ProductList />
    </>
  );
};

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