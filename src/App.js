<<<<<<< HEAD
import React from 'react'
import {items} from './items'
=======
import './App.css';
import React, {useRef, useState, Suspense} from 'react'
import SearchBar from './components/searchbar'
import { SearchContext } from './context/searchContext'
import { DataContext } from './context/dataContext'
import { createResource as fetchData} from './helper'
import Gallery from './components/gallery';
import Spinner from './components/spinner';
>>>>>>> 4fc04e55f635e5df9a852a474a067cbb1f834b93
import ItemCard from './components/itemCard';


function App() {
  let [data,setData] = useState(null)
  let searchInput = useRef('')

  const API_URL = 'https://the-sneaker-database.p.rapidapi.com/search?limit=10&query='

  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term, API_URL))
    
}

  const renderCards = () => {
    if(data){
      return(
        <Suspense fallback={<Spinner />}>
          <Gallery />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <ItemCard Item={items}/>
=======
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar/>
      </SearchContext.Provider>
      <DataContext.Provider value={data}>
        {renderCards()}
      </DataContext.Provider>
>>>>>>> 4fc04e55f635e5df9a852a474a067cbb1f834b93
    </div>
  );
}

export default App;
