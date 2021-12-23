const thunkReducer = (state="",action)=>{
    switch (action.type) {
        case "LOADING":
          return "loading"
        case "ERROR":
          return action.payload;
        case "SUCCESS":
          return action.payload;
        default:
          return state;
    }
}
export default thunkReducer;