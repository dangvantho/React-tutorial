import React, { Component } from 'react';
import AppContext from './AppContext';

class AppProvider extends Component {
    constructor(){
        super()
        this.state={
            theme:{
                isLight: true,
                dark:{syntax:'#ddd', ui:'#333', bg:'#555'},
                light:{syntax:'#555', ui:'#ddd', bg:'#eee'},
            }
        }
    }
    handleChangeTheme(){
        const newTheme={...this.state.theme,isLight: !this.state.theme.isLight}
        this.setState({theme:newTheme})
    }
    render() {
        return (
            <AppContext.Provider 
               value={{
                   ...this.state.theme,
                   onChangeTheme:this.handleChangeTheme.bind(this)
                }} 
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppProvider;