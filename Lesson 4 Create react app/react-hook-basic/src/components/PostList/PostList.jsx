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
    //console.log('two')
    return (
        <ul className="post-list">
            <li>Post List: </li>
            {posts.map((post,index)=>{
                return(
                    <li key={index} >{post.title}</li>
                )
            })}
        </ul>
    );
}

export default PostList;