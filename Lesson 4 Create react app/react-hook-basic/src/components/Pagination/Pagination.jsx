import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './Pagination.css'
Pagination.propTypes = {
    pagination:PropTypes.object,
    onPageChange:PropTypes.func
}
Pagination.defaultProps={
    pagination:{},
    onPageChange:null,
}
function Pagination(props) {
    const {pagination,onPageChange}=props
    const {_page,_limit,_totalRows}=pagination
    const totalPage=Math.ceil(_totalRows/_limit)
    function handlePageChage(value){
        if(value>totalPage || value==0) return
        if(onPageChange)
          onPageChange(value)
    }
    
    return (
        <div>
            <button disabled={_page==1} onClick={()=>handlePageChage(_page-1)} >
                Prev
            </button>
            <button disabled={_page==totalPage} onClick={()=>handlePageChage(_page+1)} >
                Next
            </button>
        </div>
    );
}

export default Pagination;