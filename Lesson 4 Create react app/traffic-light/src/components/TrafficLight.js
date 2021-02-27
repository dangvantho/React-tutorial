import React,{ Component } from 'react'
import classNames from 'classnames/bind'
import './TrafficLight.css'
class TrafficLight extends Component{
    
    render(){
        const color=this.props.color
        return (
            <div className='traffic-light'>
                <div className={'time white '+color} >Waitting for {this.props.time} s</div>
                <div className={classNames('circle','red',{
                    active:color==='red'
                })}></div>
                <div className={classNames('circle','yellow',{
                    active:color==='yellow'
                })}></div>
                <div className={classNames('circle','green',{
                    active:color==='green'
                })}></div>
            </div>
        )
    }
}
export default TrafficLight