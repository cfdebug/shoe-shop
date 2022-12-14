// inport dependancies
import React, { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import Item from './item'
// import Wish from './dbConfig'

const ItemCard = () => {
    const data = useContext(DataContext)
    const loadData = data.result.read()

    const display = loadData.map((item,index) => {
        return (
            <>
            <Item item={item} key={index} />
            <button type="submit" >Add to Wish List</button>
            </>           
        )
    })

    return (
        <div className="itemCard">
            {display}
        </div>
    )
}

export default ItemCard