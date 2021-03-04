import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Row,
    Col,
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    Button,
} from 'reactstrap'
Product.propTypes = {
    products:PropTypes.array
};
Product.defaultProps={
    products:[]
}
function Product(props) {
    const {products}=props
    return (
        <Container>
            <Row>
                {products.map((data,index)=>{
                    return (
                        <Col md="4" xs="6" key={index} className="my-4" >
                            <Card>
                              <CardImg top width="100%" src={data.img} alt="Card image cap" />
                              <CardBody>
                                <CardTitle tag="h5">{data.name}</CardTitle>
                                <CardText>{data.decription}</CardText>
                                <Button>Button</Button>
                              </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default Product;