import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducers/root.reducer'
import middleware_1 from '../middleware/middleware_1'
import middleware_2 from '../middleware/middleware_2'
import middleware_3 from '../middleware/middleware_3'
import middleware_4 from '../middleware/middleware_4'
import fetchData from '../middleware/fetch_data'

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware()))
// Create applyMiddleware
// function applyMiddleware(store,middlewares){
    
//   middlewares.forEach(middleware =>{
//       let next=store.dispatch.bind(store)
//       store.dispatch=middleware(store)(next)
//   })
  
// }
// applyMiddleware(store,[middleware_4,fetchData])

export default store