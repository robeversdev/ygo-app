import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import { CardTable } from './components/CardTable';
import { Example } from './components/ComboCreator/Example';
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
      {/*<CardTable />*/}
      {/*<CardDetailGrid cardData={laundryDragonmaidTest}/>*/}
      <DndProvider backend={HTML5Backend}>
					<Example />
			</DndProvider>
    </div>
  );
}

export default App;
