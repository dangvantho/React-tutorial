import logo from './logo.svg';
import './App.css';
import Box from './components/Box/Box'
import Todo from './components/Todo/TodoList'
import { useEffect, useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import PostList from './components/PostList/PostList';
import axios from 'axios'
import Pagination from './components/Pagination/Pagination';
import PostFilter from './components/PosTFilter/PostFilter';
import queryString from 'query-string'
import Clock from './components/Clock/Clock.jsx';
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
  const [pagination,setPagination]=useState({
    _totalRows:1,
    _limit:10,
    _page:1,
  })
  const [filter,setFilter]=useState({
    _limit:10,
    _page:1,
  })
  //Run when filter change
  useEffect(()=>{
    const searchString=queryString.stringify(filter)
    //console.log('first')
    axios.get(`http://js-post-api.herokuapp.com/api/posts?${searchString}`)
         .then(res=>{
           const {data,pagination}=res.data
           setPagination(pagination)
           setPosts(data)
         })
  },[filter])
  //Delete todo
  function handleClickTodo(index){
    const newTodos=[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  //Add new Todo
  function handleAddTodo(value){
    const newTodos=[...todos]
    const todo={
      id:randomNumber(todos),
      title: value
    }
    newTodos.push(todo)
    setTodos(newTodos)
    
  }
  //Change filter when click Prev or Next
  function handlePageChage(value){
    setFilter({
      ...filter,
      _page:value,
    })
  }
  //change filter when input submit
  function handleSubmit(value){
    setFilter({
      ...filter,
      _page:1,
      title_like: value,
    })
  }
  
  return (
    <div className="App">
      <Clock />
      <PostFilter onSubmit={handleSubmit} />
      <PostList posts={posts} />
      <Pagination 
        pagination={pagination}
        onPageChange={handlePageChage}
      />
      
    </div>
  );
}

export default App;
