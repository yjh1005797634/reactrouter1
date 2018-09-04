/**
 * Created by apple on 18/9/4.
 */

import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
/*
  创建组件有两种方式

  一、通过class 继承Component方式
  二、通过函数的方式创建
      1.通过函数创建组件的时候 参数是固定死的 props (父组件使用这个组件的时候 传进来的)
  三、什么时候用函数创建组件  什么时候用继承Component创建组件
      1.当组件不需要改变状态的时候 用函数
      2.当需要用到state 状态的时候  用类 支持状态

  四、 props =   {path:"/profile" component:Profile} 结构出来

  五、 return <Route {...rest} />    <=> 等价于 return <Route {path='/profile'} />
 */

// export default function (props) {
//
//
//
// }
/*
    ... 表示展开运算符  其余属性都结构
 */
 export default function ({component:Component,...rest}) {

     /*
        返回一个路由 路由路径是 path 然后渲染
         从localStorage里面取登录状态  如果登录过 那么渲染Profile 组件
         如果没有登录过,则重定向 到登录路由 并且记录状态 记录这个组件的pathname
      */

     return <Route {...rest} render= {

         (props) => localStorage.getItem('login')?<Component/>:
             <Redirect to = {{
               pathname:'login',

                 /*当跳转到login的时候 给login传了一个state参数 就是当前对象的当前pathname 即 /profile传给了login

                  state:props.location.pathname
            */


                 state:{from:props.location.pathname}


           }}/>
     }/>

 }