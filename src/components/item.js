
const Item = (props) => {
    return (
        <div className="item">
            <img src={props.item.image.small} alt={props.item.name} />
            <h1>{props.item.brand}</h1>
            <h2>{props.item.name}</h2>
            <div>
                <h2>Details</h2>
                <p>
                    SKU: {props.item.sku} <br />
                    colorway: {props.item.colorway} <br />
                    gender: {props.item.gender} <br />
                    release year: {props.item.releaseYear} <br />
                    <h2>Story</h2>
                    <h3>{props.item.story}</h3>
                </p>
                <p>
                    <h2>More Info</h2>
                    StockX: <a href={props.item.links.stockX}>{props.item.links.stockX}</a> <br />
                    goat: <a href={props.item.links.goat}>{props.item.links.goat}</a> <br />
                    flight Club: <a href={props.item.links.flightClub}>{props.item.links.flightClub}</a> <br />
                    stadium Goods: <a href={props.item.links.stadiumGoods}>{props.item.links.stadiumGoods}</a>
                </p>
            </div>
        </div>
    )
}

export default Item