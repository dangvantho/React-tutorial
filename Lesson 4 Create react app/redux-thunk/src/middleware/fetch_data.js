import * as types from '../constants/contants'
import axios from 'axios'

const fectch_data=store=>next=>action=>{
    if(action.type===types.FETCH_DATA){
        axios.get('https://api-products-test.herokuapp.com/api/product')
          .then(res=>{
              console.log(res.data)
              action.payload=res.data
              return next(action)
          })
    }
    return next(action)
}
export default fectch_data