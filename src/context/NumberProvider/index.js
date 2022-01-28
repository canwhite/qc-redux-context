/* eslint-disable no-unused-vars */
//1.引入context
import context from "./context";//从当前文件夹导入context
import {useState} from "react"


//2.提供一层容器
//3.todo，使用useContext消费
const NumberProvider = (props)=>{

    const changeNumber = function(number){
        setState({number:number});
    }

    let initData = {
        number:520,
        changeNumber:changeNumber
    }

    const [state, setState] = useState(initData);




    return(   
        <context.Provider value={state}>
            <div> 
                {props.children}
            </div>
        </context.Provider>
    )
}
export default NumberProvider;









