import axios from 'axios'
import {fetchData,fetchError} from '../actions/actions'
const url='https://api-products-test.herokuapp.com/api/product'
const fetchProduct=(dispatch)=>{
    return async ()=>{
      axios.get(url)
           .then(res=>{
               dispatch(fetchData(res.data))
               
           })
           .catch(()=>dispatch(fetchError()))
    }
}
export default fetchProduct