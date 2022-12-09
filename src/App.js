import './App.css';
import React, {useRef, useState} from 'react'
import SearchBar from './components/searchbar'
import { SearchContext } from './context/searchContext'
import { createResource as fetchData} from './helper'

function App() {
  let [data,setData] = useState(null)
  let searchInput = useRef('')

  const API_URL = 'https://the-sneaker-database.p.rapidapi.com/search'

  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term, API_URL))
}
  return (
    <div className="App">
      <SearchContext.Provider value={{
        term: searchInput,
        handleSearch: handleSearch
      }}>
        <SearchBar/>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
