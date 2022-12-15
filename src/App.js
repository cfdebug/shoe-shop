
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useRef, useState, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/searchBar';
import { SearchContext } from './context/searchContext';
import { DataContext } from './context/dataContext';
import { RetrieveContext } from './context/retrieveContext';
import { createResource as fetchData} from './helper';
import { createResource as fetchRetrieve} from './retrieveHelper';
import Spinner from './components/spinner';
import ItemCard from './components/itemCard';
import NaviBar from './components/NaviBar';
import AboutUs from './components/aboutUs';
import ContactUs from './components/contactUs';
import Home from './components/home';
import WishList from './components/wishList';


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
  e.preventDefault()
  setWishList(fetchRetrieve())
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

  const renderWishList = () => {
    if(wishlist){
      return(
        <Suspense fallback={<Spinner />}>
          <WishList/>
        </Suspense>
      )
    }else{
      handleRetrieve()
      return(
        <Suspense fallback={<Spinner />}>
          <WishList/>
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
        <RetrieveContext.Provider value={{
              data: wishlist,
              handleRetrieve: handleRetrieve
          }}>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={AboutUs} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/wishlist" element={renderWishList()} />
        </Routes>
        </RetrieveContext.Provider>
      </Router>

    </div>
  );
}

export default App;
