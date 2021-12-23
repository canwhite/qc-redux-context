//插入axios
import axios from "axios"

//多数为判断标识和负载
export const increment = () => {
    //return 标识和负载对象
    return {
      type: "INCREMENT",
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export const logIn = () => {
    return {
        type: "LOG_IN",
    };
};

export const logOut = () => {
    return {
        type: "LOG_OUT",
    };
};

/*-----实现thunk请求的三种状态 -----*/

//初始化
const initLoading = ()=>{
    return{
        type:"LOADING",
    }
}

//失败
const receiveError = (err)=>{
    return{
        type:"ERROR",
        payload:err
    }
}

//成功,带值
const receiveSuccess = (json)=>{
    return{
        type:"SUCCESS",
        payload:json
    }
}


/* -- 完成数据请求的过程 --*/
export const requstData = (city) =>{
    //在这里进行数据请求
    return (dispatch,getState)=>{

        dispatch(initLoading());
        axios.get(`/getWeather.php?city=${city}`)
        .then(res=>{
            //先看看请求是否成功
            console.log("----res----",res);
            dispatch(receiveSuccess(res.data.result.now.text || {}))


        }).catch(err=>{
            //失败了也会有结果
            console.log("----error----",err);
            dispatch(receiveError(err));
        })
    }
}







