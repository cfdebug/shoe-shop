
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useRef, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/searchBar';
import { SearchContext } from './context/searchContext';
import { DataContext } from './context/dataContext';
import { RetrieveContext } from './context/retrieveContext';
import { createResource as fetchData} from './helper';
import { createResource as fetchRetrieve} from './retrieveHelper';
import SearchResults from './components/searchPage';
import NaviBar from './components/NaviBar';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Home from './components/home';
import WishPage from './components/wishPage';


function App() {
  let [data,setData] = useState(null)
  let[wishlist,setWishList] = useState(null)
  
  let searchInput = useRef('')

  const API_URL = 'https://the-sneaker-database.p.rapidapi.com/search?limit=12&query='

  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term, API_URL))
    
}

const handleRetrieve = (e) => {
    console.log("I was Called!")
    e.preventDefault()
    setWishList(fetchRetrieve())
  }

  const handleRefresh = () => {
    console.log("Refresh was Called!")
    setWishList(fetchRetrieve())
  }

  return (
    <div className="App">
        <Router>
        <SearchContext.Provider value={{
          term: searchInput,
          handleSearch: handleSearch
        }}>
          <SearchBar/>
          </SearchContext.Provider>
          <RetrieveContext.Provider value={{
            data:{wishlist},
            handleRetrieve:handleRetrieve,
            handleRefresh:handleRefresh
        }}>
          <NaviBar/>
        <DataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchResults/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/wishlist" element={<WishPage/>} />
        </Routes> 
        </DataContext.Provider>
        </RetrieveContext.Provider>
      </Router>
    </div>
  );
}

export default App;
