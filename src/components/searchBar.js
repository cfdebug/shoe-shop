import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../context/searchContext'


const SearchBar = () => {
    const navigate = useNavigate();
    const navigateHome = event => {
        navigate('/');
    }

    const {term, handleSearch} = useContext(SearchContext);
    // const (e) => handleSearch(e, term.current.value);



    return(
    <div>
        <form>
            <input ref={term} type='text' placeholder='Enter a search term here'/>
            <button type='submit' onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            {/* <button onClick={navigateHome}>Home</button> */}
        </form>
    </div>
    )
}

export default SearchBar
// useNavigate isn't a Higher Order Component, it's a React hook, it must be used within a
// function component or custom React hook.