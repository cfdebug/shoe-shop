import React from "react"

import Item from './item'

const ItemCard = (props) => {
    return (
        <div className="itemCard">
            {props.items.map((data, i) => {
                return <Item item={data} key={i} />
            })}
        </div>
    )
}

export default ItemCard