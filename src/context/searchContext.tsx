import {createContext} from 'react'

export const SearchContext:any = createContext({
    term: '',
    handleSearch: () => {}
})