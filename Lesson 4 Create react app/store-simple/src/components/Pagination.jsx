import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {Row,Col} from 'reactstrap'
import {Link,useLocation} from 'react-router-dom'
import './Pagination.css'
MyPagination.propTypes = {
    pagination:PropTypes.object,
    onChangePage:PropTypes.func,
    maxPages:PropTypes.number,
};
MyPagination.defaultProps={
    pagination:{
        page: 1,
        limit: 15,
    },
    onChangePage:null,
    maxPages:1,
}
function MyPagination(props) {
    const {pagination,onChangePage,maxPages}=props
    const {page,limit}=pagination
    function handlePageChange(e){
        if(!onChangePage) return
        let value=e.target.textContent
        if(value=='>'){
            value= value===maxPages? maxPages: page+1
        }
        if(value=='<'){
            value= value===1? 1:page-1
        }
        onChangePage(value)
    }
    return (
        <Row className="justify-content-center" >
            <Col xs="8" sm="5" className="d-flex justify-content-center" >
               <Link 
                  className={classNames('pagination-link',{['d-none']: page==1})} 
                  to={`?page=${page-1}`} 
                  onClick={handlePageChange}
                >
                    {'<'}
                </Link>
               <Link 
                  className={classNames('pagination-link',{active: true})} 
                  to={`?page=${page}`} 
                  onClick={handlePageChange}
                >
                   {page}
                </Link>
               <Link 
                  className={classNames('pagination-link',{active: false})} 
                  to={`?page=${page+1}`} 
                  onClick={handlePageChange}
                >
                   {page+1}
                </Link>
               <Link 
                  className={classNames('pagination-link',{active: false})} 
                  to={`?page=${page+2}`} 
                  onClick={handlePageChange}
                >
                   {page+2}
                </Link>
               <Link 
                  className={classNames('pagination-link',{active: false})} 
                  to={`?page=${page+3}`} 
                  onClick={handlePageChange}
                >
                   {page+3}
                </Link>
               <Link 
                  className={classNames('pagination-link',{['d-none']: page==maxPages})} 
                  to={`?page=${page+1}`} 
                  onClick={handlePageChange}
                >
                   {'>'}
                </Link>
            </Col>
            
        </Row>
    );
}

export default MyPagination;