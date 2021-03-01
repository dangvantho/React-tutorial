import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind'
import './Option.css'

class Option extends Component {
    render() {
        const { items,
                selection,
                onClickSelected,
                clearItems,
                deleteSelected,
               }=this.props
        //console.log(clearItems)       
        return (
            <div className='option'>
                <div className='row'>
                    <p className={classNames('items-select')}>
                      { items > 1 ? 
                           items+' items left':
                           items+' item left'  
                      }
                    </p>
                    <ul className='center'>
                        <li 
                          className={classNames({selected:selection.all})}
                          onClick={onClickSelected}
                        >
                          All
                        </li>
                        <li 
                          className={classNames({selected:selection.active})}
                          onClick={onClickSelected}
                        >
                          Active
                        </li>
                        <li 
                          className={classNames({selected:selection.complete})}
                          onClick={onClickSelected}
                        >
                          Complete
                        </li>
                    </ul>
                    <p 
                      className={classNames('clear-items',{dnone:clearItems})}
                      onClick={deleteSelected}
                    >
                        Clear Completed
                    </p>
                </div>
            </div>
        );
    }
}

Option.propTypes = {

};

export default Option;