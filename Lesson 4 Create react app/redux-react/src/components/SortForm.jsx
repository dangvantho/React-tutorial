import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {sortByName,sortByStatus} from '../actions/index'

function SortForm(props) {
    const {sortByName,sortByStatus}=props
    const name=useRef()
    const status=useRef()
    function handleSortByName(){
        const target=name.current.selectedIndex
        switch(target){
            case 0:
                sortByName('az')
                return
            case 1:
                sortByName('za')
                return
            default:
                return        
        }
    }
    function handleSortByStatus(){
        const target=status.current.selectedIndex
        switch(target){
            case 0:
                sortByStatus('all')
                return
            case 1:
                sortByStatus('active')
                return
            case 2:
                sortByStatus('done')
                return 
            default:
                return
        }
    }
    return (
        <div className="row border-bottom py-2 align-items-center">
            <div className="col-1">Sắp xếp theo</div>
            <div className="col-5">
                <select ref={name} onChange={()=>handleSortByName()} >
                    <option >A-Z</option>
                    <option >Z-A</option>
                </select>
            </div>
            <div className="col-3">
                <select ref={status} onChange={()=>handleSortByStatus()} >
                    <option value="">All</option>
                    <option value="">Active</option>
                    <option value="">Done</option>
                </select>
            </div>
            <div className="col-3"></div>
        </div>
    );
}
const mapActionToProps={
    sortByName,
    sortByStatus,
}

export default connect(null,mapActionToProps)(SortForm);