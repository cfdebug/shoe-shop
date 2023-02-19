import {createContext} from 'react'

export const RetrieveContext:any = createContext({
    data: [],
    handleRetrieve: () => {},
    handleRefresh: () => {}
})