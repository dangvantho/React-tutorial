import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {connect} from 'react-redux'
import {editTodo,closeForm} from '../actions/index'

EditForm.propTypes = {
    editForm: PropTypes.object,
    onSubmit: PropTypes.func,
};

function EditForm(props) {
    const {editForm,onSubmit,closeForm}=props
    const {todo,index,isOpen}=editForm
    const [status,setStatus]=useState(false)
    const [value,setValue]=useState('')
    useEffect(()=>{
        setStatus(todo.onDone||false)
        setValue(todo.name||'')
    },[editForm])
    function handleSubmit(e){
        e.preventDefault()
        onSubmit(index,{
            name: value,
            onDone: status,
        })
        closeForm()
    }
    function handleChange(e){
        setValue(e.target.value)
    }
    function handleClick(value){
        setStatus(value)
    }
    return (
        <form 
           className={classNames("col-sm-3",{['d-none']:!isOpen})} 
           onSubmit={handleSubmit}>
            <label htmlFor="">Công việc:</label>
            <input type="text" className="form-control my-2" value={value} onChange={handleChange} />
            <label htmlFor="" className=" my-2">Trạng thái:</label>
            <div className="form-check">
                <label htmlFor="">Active</label>
                <input 
                  type="radio" 
                  className="mx-2" 
                  name="status"  
                  checked={!status}
                  onChange={()=>handleClick(false)} 
                />
                <label htmlFor="">Done</label>
                <input 
                   type="radio" 
                   className="mx-2" 
                   name="status" 
                   checked={status}
                   onChange={()=>handleClick(true)} 
                />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary px-5"/>
        </form>
    );
}
const mapStateToProps=state=>{
    return {
        editForm:state.editForm,
    }
}
const mapActionToProps={
    onSubmit: editTodo,
    closeForm
}
export default connect(mapStateToProps,mapActionToProps)(EditForm);