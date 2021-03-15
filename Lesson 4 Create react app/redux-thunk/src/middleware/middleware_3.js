const middleware_3= function(store){
    let next=store.dispatch.bind(store)
    return function (action){
        console.log('Action: ',action)
        next(action)
        console.log(store.getState())
    }
}
export default middleware_3