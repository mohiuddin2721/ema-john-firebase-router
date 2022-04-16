import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Product = (props) => {

    const { img, name, price, seller, ratings } = props.product;
    return (
        <CardGroup className='col-md-4 col-12 shadow-sm rounded my-3'>
            <Card>
                <Card.Img className='w-100 rounded' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-primary'>{name}</Card.Title>
                    <Card.Text className='p-0  m-0'>
                        Price: {price}
                    </Card.Text>
                    <Card.Text className='p-0 m-0'>
                        Brand: {seller}
                    </Card.Text>
                    <Card.Text className='text-success p-0 m-0'>
                        Ratings: {ratings}
                    </Card.Text>

                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Product;