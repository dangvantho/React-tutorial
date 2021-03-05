import React, { useContext, useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
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
import MyPagination from '../components/Pagination';
import AppContext from '../Context/AppContext';
Product.propTypes = {
    products:PropTypes.array
};
Product.defaultProps={
    products:[],
}
function Product(props) {
    const {products}=props
    //AppConsomer
    const {onChangeCart}=useContext(AppContext)
    // useState Pagination and caculate maxPage
    const [pagination,setPagination]=useState({
        page: 1,
        limit: 15
    })
    const {page,limit}=pagination
    const maxPages=Math.ceil(products.length/limit)

    const [list,setList]=useState([]) //useState list to render Product
    
    //useEffect to update List when products or pagination is change
    useEffect(()=>{
        const newList=products.slice((page-1)*limit,page*limit)
        setList(newList)
    },[products,pagination])
    
    //function handlePageChange excute when click Pagination
    function handlePageChange(value){
        setPagination({
            ...pagination,
            page:value-0,
        })
    }

    //HandleChageCart call when click Add cart
    function handleChangeCart(value){
        if(onChangeCart){
            onChangeCart(value)
        }
    }


    return (
        <Container>
            <Row>
                {list.map((data,index)=>{
                    return (
                        <Col md="4" xs="6" key={index} className="my-4" >
                            <Card>
                              <CardImg top width="100%" src={data.img} alt="Card image cap" />
                              <CardBody>
                                <CardTitle tag="h5">{data.name}</CardTitle>
                                <CardText>{data.description}</CardText>
                                <Button onClick={()=>handleChangeCart(data)} >Button</Button>
                              </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <MyPagination 
               pagination={pagination}
               onChangePage={handlePageChange}
               maxPages={maxPages}
            />
        </Container>
    );
}

export default Product;