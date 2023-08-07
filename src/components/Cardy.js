import React from 'react'
import {Card,Button} from 'react-bootstrap'

const Cardy = (props) => {
  console.log(props.product)
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.product.imageUrl} />
      <Card.Body>
        <Card.Title>{props.product.title}</Card.Title>
        <Card.Text>
          {props.product.price}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cardy
