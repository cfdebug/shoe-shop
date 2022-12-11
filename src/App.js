
import './App.css';
import React, {useRef, useState, Suspense} from 'react'
import SearchBar from './components/searchBar'
import { SearchContext } from './context/searchContext'
import { DataContext } from './context/dataContext'
import { createResource as fetchData} from './helper'
import Spinner from './components/spinner';
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
          <ItemCard/>
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar/>
      </SearchContext.Provider>
      <DataContext.Provider value={data}>
        {renderCards()}
      </DataContext.Provider>
    </div>
  );
}

export default App;
