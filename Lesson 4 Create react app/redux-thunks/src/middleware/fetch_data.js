import * as types from '../constants/contants'
import axios from 'axios'

const fectch_data=store=>next=>async action=>{
    if(action.type===types.FETCH_DATA){
      
      let data=await axios.get('https://api-products-test.herokuapp.com/api/product')
      action.payload=data.data
      return next(action)
    }
    else return next(action)
}
export default fectch_data