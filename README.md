
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

5.管理用户列表:
   添加用户到localStorage
   删除用户 先根据字符取 再删除 splice  删完后再存储到loaclStorage
   用户详情 展示 箭头
    箭头函数进一步掌握
