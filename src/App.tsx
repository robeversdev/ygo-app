import './App.css';
import { CardTable } from './components/CardTable';
import { HeaderMenu } from './components/HeaderBody/HeaderMenu';

const testData = {
  name: "Laundry Dragonmaid",
  ID: "1234",
  Type: "Monster",
  Attack: 500,
  Defense: 1600,
  imageURL: "LaundryDragonmaid.avif",
}

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      {/*<TestComponent cardData={laundryDragonmaidTest}/>*/}
      <CardTable />
      {/*<CardDetailGrid cardData={laundryDragonmaidTest}/>*/}
    </div>
  );
}

export default App;
