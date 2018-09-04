/**
 * Created by apple on 18/9/3.
 */

import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom'
import userList from './userList'
import userAdd from './userAdd'
import userDetail from './userDetail'


export default class User extends Component {

    render(){

        return (
            <div>
               <div className="row">
                   <div className="col-sm-2">
                         <ul className="nav nav-stacked">
                             <li><Link to="/user/userList">用户列表</Link></li>
                             <li><Link to="/user/userAdd" >新增用户</Link></li>
                         </ul>
                   </div>
                   <div className="col-sm-10">
                            <Route path="/user/userList" component={userList}/>
                            <Route path="/user/userAdd" component={userAdd}/>
                            <Route path="/user/detail/:id" component={userDetail} />

                   </div>
               </div>
            </div>
        )
    }
}