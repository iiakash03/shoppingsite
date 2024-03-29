import React from 'react'
import { Col,Row,Container } from 'react-bootstrap/'
import Cardy from './Cardy'

const Demo = () => {
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
  return (
    <>
    <Container className='mt-3'>
        <Row>
            {productsArr.map(product=>{
                return <Col className='mb-3 m-3' sm={6} md={4} lg={5} key={product.title}><Cardy product={product}/></Col>
            })}
                
        </Row>

    </Container>
    </>
  )
}

export default Demo
