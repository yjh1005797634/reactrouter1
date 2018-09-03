/**
 * Created by apple on 18/9/3.
 */
import React,{Component} from 'react';
import {Button,Nav,Navbar,NavItem,NavDropdown,MenuItem } from 'react-bootstrap';

// import 'node_modules/_bootstrap@4.1.3@bootstrap/dist/css/bootstrap.css';
// import '/Users/apple/Documents/ReactDemo/reactrouter1/node_modules/_bootstrap@4.1.3@bootstrap/dist/css/bootstrap.css';

import Home from './Home'
import User from './User'
import Profile from './Profile'



import {
    HashRouter as Router, //容器
    Route  // 一条路由

} from 'react-router-dom';




/*这里是导出一个App组件 实例  */
export default class App extends Component{


    handleSelect = (selectKey)=>{
        alert('选择'+ selectKey );
    }


    render(){

        return (
            <Router>
                <div>

                    <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
                        <NavItem eventKey={1} href="/home">导航条目 1 的内容</NavItem>
                        <NavItem eventKey={2} title="Item">导航条目 2 的内容</NavItem>
                        <NavItem eventKey={3} disabled>导航条目 3 的内容</NavItem>
                    </Nav>


                    <Route path="/home" component={Home} />
                    <Route path="/user" component={User} />
                    <Route path="/profile" component={Profile} />
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