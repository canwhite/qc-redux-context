//拿到Context hook，
import React,{createContext} from "react";
//1.创建context，实际上初始值可以不给，方便后续挂载
//context也可以独立到另外一个文件夹，方便后期引入
const ToggleContext = createContext({
    toggle:true,
    handleToggle:()=>{}
})

//2.创建一个容器，用于挂载值
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




//3.导出消费者，可以直接消费
export const ToggleConsumer = ToggleContext.Consumer;

