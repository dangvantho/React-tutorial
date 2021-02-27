import React from 'react'
import './App.css';
import TrafficLight from './components/TrafficLight'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
        time: 10,
        color:'red',
    }
    
  }
  componentDidMount(){
      this.timeId=setInterval( ()=>{
          this.setState((state, props)=>({
              time: --state.time,
              color:state.color
          }))
          this.changeLight(this.state.color,this.state.time)
      },1000)
  }
  componentWillUnmount(){
      clearInterval(this.timeId)
  }
  //Change Trafic Light
  changeLight(color,time){
      if(time===0){
          switch(color){
              case 'red':
                  this.setState({
                      time: 5,
                      color:'yellow'
                  })
                  break
              case 'yellow':
                  this.setState({
                      time: 8,
                      color:'green'
                  })    
                  break
              case 'green':
                  this.setState({
                      time:10,
                      color:'red'
                  })    
                  break
          }
      }
  }
  render(){
    return (
      <div className="App">
        <TrafficLight color={this.state.color} time={this.state.time}></TrafficLight>
      </div>
    )
  }
}

export default App;
