/* eslint-disable no-unused-vars */
//1.引入context
import {createContext} from "react";
import {useState} from "react"

//Context
export const Context = createContext();


//2.提供一层容器
//3.todo，使用useContext消费
export const NumberProvider = (props)=>{

    const changeNumber = function(number){
        setState({number:number});
    }

    let initData = {
        number:520,
        changeNumber:changeNumber
    }

    const [state, setState] = useState(initData);

    return(   
        <Context.Provider value={state}>
            <div> 
                {props.children}
            </div>
        </Context.Provider>
    )
}










