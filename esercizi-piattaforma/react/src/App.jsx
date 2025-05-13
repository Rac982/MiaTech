import Counter from './components/Counter';
import TextInput from './components/TextInput';
import Form from './components/Form';
import FruitsList from './components/FruitsList';
import Card from './components/Card';
import { Route, Routes } from 'react-router-dom';

import ProductList from './pages/ProductList';
import About from './pages/About';
import CustomLayout from './layouts/CustomLayout';
import ProductDetail from './pages/ProductDetail';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CustomLayout />}>
          <Route path="" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
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