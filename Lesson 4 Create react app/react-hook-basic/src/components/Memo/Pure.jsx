import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Pure extends PureComponent {
    render() {
        console.log(this.props.name,' PureComponent')
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

Pure.propTypes = {
    name:PropTypes.string
};

export default Pure;