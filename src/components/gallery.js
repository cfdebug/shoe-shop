import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'

const Gallery = () => {
    const data = useContext(DataContext)
    const loadData = data.result.read()

    const display = loadData.map((item,index) => {
        return (
            <ul>
                <li>
                    {item.brand} {item.name}
                </li>
            </ul>
        )
    })

    return(
    <div>
        {display}
    </div>
    )
}

export default Gallery