export default{
  namespace:"search",
  state:{
    text:"dva",
    lists:[]
  },

  //同步的方法
  reducers:{
    getLists(state,action){
      return{
        ...state,
        lists:Array(10).fill(action.payload)
      }
    }
  },

  //异步的方法
  effects:{

  }
}