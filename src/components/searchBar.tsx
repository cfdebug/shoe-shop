import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { SearchContext } from '../context/searchContext'
import Button from 'react-bootstrap/Button'

const SearchBar = () => {

    const {term, handleSearch}:any = useContext(SearchContext)
    const navigate = useNavigate()

    return(
    <div>
        <form onSubmit={(e) => {
            handleSearch(e, term.current.value)
            navigate('/search')
        }
        }>
            
            <input ref={term} type='text' placeholder='Enter a search term here'/>
            <Button className="search-btn" variant='light' onClick={(e) => handleSearch(e, term.current.value)}><Link to="/search">Search</Link></Button>
        </form>
    </div>
    )
}

export default SearchBar