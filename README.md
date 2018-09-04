
1.安装路由
  npm install react-router-dom -S

2.跑通路由 跑起来就好了

3.引入bootstrap react16.4 不支持bootstrap4^的版本 支持3.3.7版本
  3.1 修改bootstrap样式:  提高权重 可以修改

4.路由文件的设置 二级路由的设置
  路由选择组件里面有三个属性
  location:当前路径
  history:跳转路径
  match:匹配结果 当前路径匹配上了就有值

  <Route path='/:name' render={
     props=>{

         <div>{props.match.params.name}</div>

     }

     />


   路由的精确匹配: exact 属性

   路由的从上到下匹配 组件 Switch组件 从上往下匹配 如果有一个匹配上了 后面不再匹配

       <Switch>
               <Route path="/" render={props=><div>首页</div>}/>
               <Route path="/:name" render={props=><div>{props.match.params.name}</div>}/>

               <Route path="/home" component={Home} />
               <Route path="/user" component={User} />
               <Route path="/profile" component={Profile} />
       </Switch>



5.管理用户列表:
   添加用户到localStorage
   删除用户 先根据字符取 再删除 splice  删完后再存储到loaclStorage
   用户详情 展示 箭头
    箭头函数进一步掌握


6.保护未登录不能访问的路径  网易云音乐的 我的音乐有这个需求
  当用户访问个人设置的时候,先判断是否登录,如果已经登录则直接显示个人设置,如果未登录则跳转到登录页面
  进行登录,如果登录成功则自动跳回到登录前的页面


           <Switch>

               <Route exact path="/" render={props=><div>首页</div>}/>
               <Route path="/home" component={Home} />
               <Route path="/user" component={User} />
               <Route path="/login" component={Login}/>

               {/*这里 ProtectedRoute  Profile不是路由 就是一个普通组件 父组件传入两个属性    */}
               <ProtectedRoute path="/profile" component={Profile} />
               {/*<Route path="/profile" component={Profile} />*/}


           </Switch>


   到ProtectedRoute页面

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


      到login 页面

      export default function (props) {

          return <button className="btn btn-primary" onClick={()=>{

              localStorage.setItem('login','true');
              props.history.push(props.location.state.from)

              /* 打印出来  是 {from: "/profile"} */
              {/*console.log(props.location.state);*/}
          }
          }>登录</button>
      }


7.创建组件的两种方式
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

8.点击导航按钮 高亮设置

  /*
    高亮设计精巧: children 不管传来的path是否匹配 match 都会渲染一个li 组件 但只是渲染的css样式不同
   */



  <MenuLink label="首页" to="/home" />
  <MenuLink label="用户管理" to="/user" />
  <MenuLink label="个人设置" to="/profile" />




  export default function ({to, label}) {


      return (
          <Route path={to} children = {({match}) => {


              {/*console.log(this.props.children);*/}

              {/*console.log(match);*/}
              return <li className={match?'active':''}>

                  <Link to={to}>{label}</Link>
              </li>
          }} />
      )
  }


9.新增用户的时候 在输入框输入内容的时候 突然点了别的按钮 页面需要提示框

  组件Prompt

  通过设置 blocking状态 控制 是否提示 当输入框内有值 并且长度>0 的时候 跳转会提示


  <Prompt
          when={this.state.blocking}
          message={(location) =>'你确定要跳转到 '+location.pathname+''} />

















