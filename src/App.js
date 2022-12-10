import React from 'react'
import {items} from './items'
import ItemCard from './components/itemCard';


function App() {
  return (
    <div className="App">
      <ItemCard Item={items}/>
    </div>
  );
}

export default App;
