const logMiddleWare= function (store,action){
    console.log(action)
    store.dispatch(action)
    console.log(store.getState())
  }
export default logMiddleWare  