import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderMenu } from './components/HeaderBody/HeaderMenu';
import { TestComponent } from './components/TestComponent';

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
      <TestComponent CardProps={testData}/>
    </div>
  );
}

export default App;
