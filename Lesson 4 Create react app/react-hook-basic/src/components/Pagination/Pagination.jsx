import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './Pagination.css'
Pagination.propTypes = {
    posts:PropTypes.array,
    onNext:PropTypes.func,
    onPrev:PropTypes.func,
    isPageOne:PropTypes.bool,
    isPageLast:PropTypes.bool,
};
Pagination.defaultProps={
    posts:[],
    onNext:null,
    onPrev:null,
    isPageOne:true,
    isPageLast:false
}
function Pagination(props) {
    const {posts,onPrev,onNext,isPageOne,isPageLast}=props
    return (
        <ul>
            {posts.map((post,index)=>{
                return(
                    <li key={index} >{post.title}</li>
                )
            })}
            <p className={classNames('btn',{opacity:isPageOne})} onClick={onPrev} >{'<'}</p>
            <p className={classNames('btn',{opacity:isPageLast})} onClick={onNext} >{'>'}</p>
        </ul>
    );
}

export default Pagination;