import logo from './logo.svg';
import './App.css';
import Box from './components/Box/Box'
import Todo from './components/Todo/TodoList'
import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import PostList from './components/PostList/PostList';
import axios from 'axios'
import Pagination from './components/Pagination/Pagination';
const initialTodos=[
  {id:238232, title:'Đi chơi'},
  {id:321213, title:'Đi câu cá'}
]
function randomNumber(todos){
  let random=Math.floor(Math.random()*10000000)
  if(todos.find(todo=>todo.id===random)) return randomNumber(todos)
  else return random
}
function App() {
  const [todos,setTodos]=useState(initialTodos)
  const [posts,setPosts]=useState([])
  const [page,setPage]=useState(1)
  useEffect(()=>{
    axios.get('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page='+page)
         .then(res=>{
           const newPosts=res.data.data
           setPosts(newPosts)
         })
  },[page])
  function handleClickTodo(index){
    const newTodos=[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  function handleAddTodo(value){
    const newTodos=[...todos]
    const todo={
      id:randomNumber(todos),
      title: value
    }
    newTodos.push(todo)
    setTodos(newTodos)
    
  }
  function handleClickNext(){
    if(page<=5){
      const newPage=page+1
      setPage(newPage)
    }
  }
  function handleClickPrev(){
    if(page>=2) {
      const newPage=page-1
      setPage(newPage)
    }
  }
  return (
    <div className="App">
      {/* <Box />
      <AddTodo  onChange={handleAddTodo} />
      <Todo todos={todos} onClick={handleClickTodo}  /> */}
      {/* <PostList posts={posts}/> */}
      <Pagination 
        onNext={handleClickNext} 
        onPrev={handleClickPrev}
        isPageOne={page==1 ? true : false}
        isPageLast={page==5 ? true: false} 
        posts={posts} 
      />
    </div>
  );
}

export default App;
