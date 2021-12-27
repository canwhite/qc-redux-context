## qc-redux-context
redux + axios and proxy + redux-thunk + context    
平时用frer作状态管理比较多，redux最近可能要用到，复习写一下    



## des  

* redux 处理了同步和异步两种情况
* 简单的全局状态可能会使用Context,Provider注入、Consumer消费
* redux相关在src/redux
* context相关在src/context
* 具体使用是在App.js，
* App.js还添加了emotion的使用



## run
```
yarn install

yarn start

```

## ps ：css-in-js之emotion的使用

```
install:

yarn add @emotion/react
yarn add @emotion/styled

1.======一般使用（Css组件）======
import styled from "@emotion/styled"
.................

const color = 'red' //外置参数

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
.................
<Container>
    <span>123 </span>
</Container>


2.=====给已存在组件加样式，类似HOC=====

// Card 是antd已存在的组件
const ShadowCard = styled(Card)`
    width: 40rem;
    min-height: 56rem;
    padding: 3.2rem 4rem;
    border-radius: 0.3rem;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
    text-align: center;
`;


3.=====使用css行内样式=====
//在顶部加上这个
/* @jsxImportSource @emotion/react */
import { css} from '@emotion/react'

<div css={css`
    color:red,
    margin-top:15px;
    background:green;
    display:flex;
    justify-content:center;
    align-items:center;
    height:80px;
`}> emotion行内样式</div>



4.=====提出公共的css组件=====

// 定义Row组件
import styled from "@emotion/styled"

//从props取值
export default styled('div')`
    display: block;
    box-sizing: border-box;
    flex: 1 0 0;
    min-width: 0;
    color:red;
    margin-top:15px;
    justify-content: ${(props) => (props.between ? "space-between" : undefined)};
    margin-bottom: ${(props) =>props.marginBottom ? props.marginBottom + "px" : undefined};
    > * {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: ${(props) =>
            typeof props.gap === "number"
                ? props.gap + "rem"
                : props.gap
                ? "2rem"
                : undefined
            };
        }
`

// 调用Row组件

import Row from "./Row" 
const HeaderLeft = styled(Row)``; //起个新名字


<HeaderLeft gap={1}> 
    //html代码
</HeaderLeft>




```
