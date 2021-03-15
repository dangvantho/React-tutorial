const middleware_4=store=>next=>action=>{
    console.log('Action: ',action)
    let result=next(action)
    console.log(store.getState(),result)
    return result
}
export default middleware_4