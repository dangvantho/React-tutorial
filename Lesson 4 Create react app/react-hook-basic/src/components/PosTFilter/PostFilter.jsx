import React, { useEffect, useState,useRef } from 'react';
import PropTypes from 'prop-types';

PostFilter.propTypes = {
    onSubmit:PropTypes.func,
};
PostFilter.defaultProps={
    onSubmit:null,
}
function PostFilter(props) {
    const {onSubmit}=props
    const [value,setValue]=useState('')
    const timeout=useRef(null)
    function handleSubmit(e){
        if(!onSubmit) return
        const value=e.target.value
        setValue(value)
        if(timeout.current) clearTimeout(timeout)
        timeout.current=setTimeout(()=>{
            onSubmit(value)
        },500)
    }
    return (
        <div>
            <input 
               type="text" 
               value={value} 
               onChange={handleSubmit}
                
            />
        </div>
    );
}

export default PostFilter;