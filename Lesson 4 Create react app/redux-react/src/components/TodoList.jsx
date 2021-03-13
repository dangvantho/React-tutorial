import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

TodoList.propTypes = {
    todoList:PropTypes.array,
    onDeleteTodo:PropTypes.func,
    onEditTodo:PropTypes.func,
};
TodoList.defaultProps={
    todoList:[],
    onDeleteTodo:null,
    onEditTodo:null,
}

function TodoList(props) {
    const {todoList,onDeleteTodo,onEditTodo}=props
    function handleDeleteTodo(index){
        console.log(index)
    }
    function handleEditTodo(index){
        console.log(index)
    }
    return (
        <React.Fragment>
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
                            <button className="btn btn-warning me-1" onClick={handleEditTodo}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDeleteTodo}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </React.Fragment>
        
    );
}
const stateToProps=(state)=>{
    return {
        todoList: state.tasks,
    }
}

export default connect(stateToProps,null)(TodoList)