
import './App.css';
import React, {useRef, useState, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/searchBar';
import { SearchContext } from './context/searchContext';
import { DataContext } from './context/dataContext';
import { createResource as fetchData} from './helper';
import Spinner from './components/spinner';
import ItemCard from './components/itemCard';
import NaviBar from './components/NaviBar';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Home from './components/home';
import WishList from './components/wishList';


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
      <Router>
        <SearchContext.Provider value={{
          term: searchInput,
          handleSearch: handleSearch
        }}>
          <SearchBar/>
          <NaviBar />

        
        </SearchContext.Provider>
        <DataContext.Provider value={data}>
          {renderCards()}
        </DataContext.Provider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={AboutUs} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/wishlist" element={<WishList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
