import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import Item from './item'

const ItemCard = () => {
    const data = useContext(DataContext)
    const loadData = data.result.read()

    const display = loadData.map((item,index) => {
        return (
            <>
            <Item item={item} key={index} />
            <button>Add to wishlist </button>
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