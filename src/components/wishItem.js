import Card from 'react-bootstrap/Card'
import { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Popup from 'reactjs-popup'


const WishItem = (props) => {
    const ref = useRef()
    const closeTooltip = () => ref.current.close()
    const sendData = async (data) => {
        const options = {method: 'DELETE', headers: {'Accept': 'application/json', 'Content-Type' : 'application/json'}}
        const response = await fetch(`https://shoe-shop-661m.vercel.app/wishList/delete/${data._id}`,options)
        console.log(response.status)
    }

    return (
            <Card className='card' border='dark' bg='light'>
                <Card.Header>
                    <h1>{props.item.brand}</h1>
                    <h2>{props.item.name}</h2>
                </Card.Header>
                <Card.Body>
                    <Card.Img src={props.item.image.small} alt={props.item.name} style={{width:'50%'}} />
                    <Card.Title><h2>Details</h2></Card.Title>
                    <Card.Text>
                        SKU: {props.item.sku} <br/>
                        Colorway: {props.item.colorway} <br/>
                        Gender: {props.item.gender} <br/>
                        Release Year: {props.item.releaseYear} <br/>
                    </Card.Text>
                    <Card.Title>
                        {props.item.story ? <Popup ref={ref} trigger={<Button variant="primary">Story</Button>} position="center center">
                            <Card.Text>{props.item.story}</Card.Text>
                            <Button onClick={closeTooltip}>Close</Button></Popup> : ''}
                    </Card.Title>
                    <Card.Text>   
                    </Card.Text>
                    <Card.Title><h2>Places To Buy</h2></Card.Title>
                        {props.item.links.stockX ? <Card.Text><a href={props.item.links.stockX}>StockX</a><br/></Card.Text> : '' }
                        {props.item.links.goat ? <Card.Text><a href={props.item.links.goat}>Goat</a><br/></Card.Text> : '' }
                        {props.item.links.flightClub ? <Card.Text><a href={props.item.links.flightClub}>FlightClub</a><br/></Card.Text> : '' }
                        {props.item.links.stadiumGoods ? <Card.Text><a href={props.item.links.stadiumGoods}>StadiumGoods</a><br/></Card.Text> : '' }
                        
                            <Button variant="warning" type='Submit' onClick={() => sendData(props.item)}>
                                Remove from WishList
                            </Button>
                        
                </Card.Body>
            </Card>
    )}

export default WishItem