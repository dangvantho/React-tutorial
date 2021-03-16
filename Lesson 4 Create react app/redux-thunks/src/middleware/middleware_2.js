const middleware_2=function(store){
    let next=store.dispatch.bind(store)
    store.dispatch=function(action){
        console.log(action)
        let result=next(action)
        console.log('New state: ',store.getState())
        return result
    }
}
export default middleware_2