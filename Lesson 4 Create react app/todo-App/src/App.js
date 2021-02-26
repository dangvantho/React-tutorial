import './App.css';
import Todo from './components/Todo'
function App() {
  const items=[
    {isSmall:true , img: 'http://bit.ly/3ayPusa' },
    {isSmall:false , img: 'http://bit.ly/3ayPusa' },
    {isSmall:false , img: 'http://bit.ly/3ayPusa' },
    {isSmall:false , img: 'http://bit.ly/3ayPusa' },
    {isSmall:true , img: 'http://bit.ly/3ayPusa' },
    {isSmall:false , img: 'http://bit.ly/3ayPusa' },
  ]
  return (
    <div className="App">
      {items.map((item,index)=>{
        return (
          <Todo isSmall={item.isSmall} image={item.img} key={index} />
        )
      })}
    </div>
  );
}

export default App;
