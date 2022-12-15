// inport dependancies
import React, { useContext } from 'react'
import { RetrieveContext } from '../context/retrieveContext'
import Item from './item'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


const WishList = () => {
    console.log("WishList was called!")
    const {data} = useContext(RetrieveContext)
    const loadData = data.result.read()

    const display = loadData.map((item,index) => {
        console.log(item)
        return (
            <Col key={index} style={{display:'flex', justifyContent: 'space-around'}}>
                <Item item={item} key={index} />
            </Col>
        )
    })

    return (
        <div className="wishList">
                <Container fluid style={{padding: '100px', textAlign: 'center'}}>
                    <Row xs={1} md={3} style={{display: 'flex', justifyContent: 'space-around'}}>
                        {display}
                    </Row>
                </Container>
        </div>
    )
}

export default WishList