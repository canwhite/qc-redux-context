/* @jsxImportSource @emotion/react */
import './App.css';
import styled from "@emotion/styled"
import { css} from '@emotion/react'
import Row from "./Row" 
import { useContext } from 'react';
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





function App() {

  const counter = useSelector((state)=>state.counter);
  const auth = useSelector((state)=>state.auth);
  const thunk = useSelector((state)=>state.thunk);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h1>
         Hello World <br /> A little Redux Project. YaaY!
      </h1>

      {/* =====PS1:redux===== */}

      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>


      <h2>For Logged in users only</h2>
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

      {/* =====PS2:Context===== */}

      <h2>Context.Provider 和Context.consumer要搭配使用</h2>
    
      <ToggleProvider>
        <Switcher></Switcher>
      </ToggleProvider>

      <NumberProvider> 

        <ContextContainer />

      </NumberProvider>



      {/* =====PS3:thunk===== */}
      <h2>thunk</h2>
    
      <p><button onClick={()=>{
        dispatch(requstData("北京"))
      }}>发起请求</button></p>
      <p>{thunk}</p>


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




export default App;
