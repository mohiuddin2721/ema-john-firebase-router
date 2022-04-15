import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const HomeProduct = (props) => {
    const {name, img, price, ratings} = props.product;
    return (
        <CardGroup className='col-md-4 col-12 shadow-sm rounded my-3'>
            <Card>
                <Card.Img className='w-100 rounded' variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='text-primary'>{name}</Card.Title>
                    <Card.Text className='p-0'>
                        <h5 className='p-0 m-0'>Price: {price}</h5>
                        <p className='p-0 m-0'>Brand: Addidas</p>
                        <h6 className='text-success p-0 m-0'>Ratings: {ratings}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default HomeProduct;