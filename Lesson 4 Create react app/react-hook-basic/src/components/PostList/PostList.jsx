import React, { useState } from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts:PropTypes.array
};
PostList.defaultProps={
    posts:[]
}
function PostList(props) {
    const {posts}=props
    const [page,setPage]=useState(1)
    console.log(posts)
    let list=posts.slice((page-1)*6,page*6)
    function handleNext(){
        const maxPages=Math.ceil(posts.length/6)
        if(page<maxPages){
            const newPage=page+1
            setPage(newPage)
        }

    }
    function handlePreve(){
        if(page>1){
            const newPage=page-1
            setPage(newPage)
        }
    }
    return (
        <ul className="post-list">
            <li>Post List: </li>
            {list.map((post,index)=>{
                return(
                    <li key={index} >{post.title}</li>
                )
            })}
            <button onClick={handlePreve} >{'<'}</button>
            <button onClick={handleNext} >{'>'}</button>
        </ul>
    );
}

export default PostList;