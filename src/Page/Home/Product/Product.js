import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Product = (props) => {
    
    const { img, name, price, seller, ratings } = props.product;
    return (
        <CardGroup className='container '>
            <Card>
                <Card.Img className='w-25' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <h3>Price: {price}</h3>
                        <h4>Brand: {seller}</h4>
                        <h5>Ratings: {ratings}</h5>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Product;