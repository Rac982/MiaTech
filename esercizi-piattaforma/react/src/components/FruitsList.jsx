import ItemList from './ItemList';

const FruitsList = () => {
  const fruits = ["Apple", "Cherry", "Strawberry", "Pineapple", "Peach"];
  
  return (
    <div>
      <h2>Fruits list</h2>
      <ItemList items={fruits} />
    </div>
  );
};

export default FruitsList;