import React from 'react';
import PropTypes from 'prop-types';

Memo.propTypes = {
    name:PropTypes.string
};

function Memo(props) {
    console.log(props.name,' React.memo')
    return (
        <div>
            {props.name}
        </div>
    );
}

export default React.memo(Memo);