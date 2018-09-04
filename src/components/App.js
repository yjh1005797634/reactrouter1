/**
 * Created by apple on 18/9/3.
 */
import React,{Component} from 'react';
import {Button,Nav,Navbar,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';
import './App.css'

import Home from './Home'
import User from './User'
import Profile from './Profile'



import {
    // HashRouter as Router, //容器 HashRouter 容易报错 出现多次点击的时候 hash push history的报错
    BrowserRouter as Router,
    Route,  // 一条路由
    Link
} from 'react-router-dom';




/*这里是导出一个App组件 实例  */
export default class App extends Component{

    render(){
        return (
            <Router>
                <div className="header">
                    <div>
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <div className="navbar-brand">
                                        珠峰用户管理系统
                                    </div>
                                </div>
                                <ul className="nav navbar-nav">
                                    <li><Link to="/home">首页</Link></li>
                                    <li><Link to="/user">用户</Link></li>
                                    <li><Link to="/profile">设置</Link></li>
                                </ul>
                            </div>
                        </nav>


                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <Route path="/home" component={Home} />
                                    <Route path="/user" component={User} />
                                    <Route path="/profile" component={Profile} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>

        )
    }
}

/* 遇到坑 这里是直接导出下面代码  */

// export default (
//     <Router>
//         <div>
//             <Route path="/home" component={Home} />
//             <Route path="/user" component={User} />
//             <Route path="/profile" component={Profile} />
//         </div>
//     </Router>
// )