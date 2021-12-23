//拿到Context hook，
import React,{createContext} from "react";
//1.使用createContext创建上下文
//state 和方法只是一个“骨架”，
//后面的 Provider 会覆盖
const ToggleContext = createContext({
    toggle:true,
    handleToggle:()=>{}
})

//2.创建Provider，类似vue的provider
//这里的Provider本质上是一个组件
export class ToggleProvider extends React.Component{

    //因为箭头函数的特点之一就是不绑定新的this
    //箭头函数的this是在词法层面就绑定到了外层作用域
    //so,我们把它定义在前边，当然我们也可以写普通function
    //在下边bind

    handleToggle = ()=>{
        this.setState({
            toggle:!this.state.toggle
        })
    }


    //2-1,重写state,
    //相当于挂载在同步创建的protoType上
    state = {
        toggle:true,
        handleToggle:this.handleToggle
    }

    render(){
        //2-2 通过provider组件的value将state提供出来
        return(
            <ToggleContext.Provider value={this.state}>
                {this.props.children}
            </ToggleContext.Provider>
        )
    }

}




//3.创建consumer
export const ToggleConsumer = ToggleContext.Consumer;

