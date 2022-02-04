/* @jsxImportSource @emotion/react */
import './App.css';
import styled from "@emotion/styled"
import { css} from '@emotion/react'
import Row from "./Row" 
import React,{ useContext } from 'react';
//=====PS1:redux====
//然后就是通过reducer拿到state，以及怎么使用dispatch了
//从provider到useSelector到useDispatch,这些方法我们都从react-redux中拿
import { useSelector, useDispatch } from "react-redux";
//然后我们把actions们拿到
import{
  decrement,
  increment,
  reset,
  logIn,
  logOut,
  requstData
}from "./redux/actions/index";

//=====PS2:Context=====
//先来看下Context.Provider
//再来看下Context.Consumer
import {
  ToggleProvider,
  ToggleConsumer
} from "./context/ToggleContext"

import NumberProvider from './context/NumberProvider';
import Context from './context/NumberProvider/context';

//和emotion配套使用,外置参数
const color = 'red'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color:${color};
  & span {
    font-size:20px;
    font-weight:600;
  }
`;

//通用组件，起个别名
const HeaderLeft = styled(Row)``;


const RefUse = ()=>{

  /* 
    1.useRef返回一个可变的ref对象,并通过.current取值
  */
  const initRef = React.useRef(true);
  // console.log("-----",initRef.current);


  /*
    2.挂载dom
  */
  const inputEl = React.useRef(null);

  const onButtonClick = ()=>{
    inputEl.current.focus();
    console.log(inputEl.current.value)
  }
  return(
    <div> 
      <p>{initRef.current?'true':'false'}</p>
      <p><input ref={inputEl} type="text" /> </p>
      <p><button onClick={onButtonClick}>Focus the input</button> </p>
    </div>
  )


}



function App() {

  const counter = useSelector((state)=>state.counter);
  const auth = useSelector((state)=>state.auth);
  const thunk = useSelector((state)=>state.thunk);
  const dispatch = useDispatch();


  return (
    <div className="App">

      <h2>-----redux-----</h2>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {/* 内容显示 */}
      {
        auth?(
          <div>
          <p>
            I don't know more than 50% of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>

        ):(
          ""
        )
      }


      <h2>-----thunk异步请求-----</h2>
    
      <p><button onClick={()=>{
        dispatch(requstData("北京"))
      }}>发起请求</button></p>
      <p>result:{thunk}</p>





      <h2>-----createContext和useContext-----</h2>
      {/* 
      通过reateContext创建的实例context提供provider 
      通过这个provider我们可以创建容器提供数据
      消费阶段有两种方法：
      consumer和useContext
      下边是两种消费的例子
      */}
      
      {/* 1.consumer */}
      <ToggleProvider>
        <Switcher></Switcher>
      </ToggleProvider>

      {/* 2.useContext */}
      <NumberProvider> 
        <ContextContainer />
      </NumberProvider>



      <h2> -----useRef----- </h2>

      <RefUse />

      <h2>-----Emotion-----</h2>
      {/* emotion */}
      <Container>
        <span>emotion组件</span>
      </Container>

      <div css={css`
        color:red,
        margin-top:15px;
        background:green;
        display:flex;
        justify-content:center;
        align-items:center;
        height:80px;
        margin-top:15px;
      `}> emotion行内样式</div>


      <HeaderLeft gap={1}> 
        emotion通用组件
      </HeaderLeft>










    </div>
  );
}


//1. consumer
const Switcher = () => {
  return (
    /* 
    实际上可以把Consumer理解为一个inject
    Consumer的children必须是一个函数。 */
    <ToggleConsumer>
      {({ toggle, handleToggle }) => <div onClick={() => handleToggle()}>{ toggle ? '✔' : '❌'}</div>}
    </ToggleConsumer>
  )
}


//2.useContext
const ContextContainer = (props)=>{

  const context = useContext(Context)
  return (
    <div> 
      <p>{context.number}</p>
      <p>
        <button onClick={()=>{
          //值的更改
          context.changeNumber(120)
        }}>
          更改上述值
        </button> 
      </p>
    </div>
  )
}


export default App;
