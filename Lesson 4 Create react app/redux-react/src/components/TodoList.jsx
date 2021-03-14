import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import {connect} from 'react-redux'
import {deleteTodo,toggleForm} from '../actions/index'

TodoList.propTypes = {
    todoList:PropTypes.array,
    onDeleteTodo:PropTypes.func,
};
TodoList.defaultProps={
    todoList:[],
    onDeleteTodo:null,
}

function TodoList(props) {
    const {todoList,editForm,onDeleteTodo,onOpenEditForm}=props
    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(todoList))
    },[todoList])
    return (
        <div className={classNames({['col-sm-9']: editForm.isOpen })}>
            <div className="row border" >
                <div className="col-1">#</div>
                <div className="col-5">Công việc</div>
                <div className="col-3">Trạng thái</div>
                <div className="col-3">Hành động</div>
            </div>
            {todoList.map((todo,index)=>{
                return(
                    <div className='row border-bottom py-2 align-items-center' key={index}>
                        <div className="col-1">{index}</div>
                        <div className="col-5">{todo.name}</div>
                        <div className="col-2">{todo.onDone?'Done':'Active'}</div>
                        <div className="col-4 d-flex justify-content-center">
                            <button className="btn btn-warning me-1" onClick={()=>onOpenEditForm(index,todo)}>Edit</button>
                            <button className="btn btn-danger" onClick={()=>onDeleteTodo(index)}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
        
    );
}
const mapStateToProps=(state)=>{
    return {
        todoList: state.tasks,
        editForm: state.editForm,
    }
}
const mapActionToProps={
    onDeleteTodo: deleteTodo,
    onOpenEditForm: toggleForm,
}

export default connect(mapStateToProps,mapActionToProps)(TodoList)