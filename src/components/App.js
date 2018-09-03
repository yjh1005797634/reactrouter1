/**
 * Created by apple on 18/9/3.
 */
import React,{Component} from 'react';

import Home from './Home'
import User from './User'
import Profile from './Profile'



import {
    HashRouter as Router, //容器
    Route  // 一条路由

} from 'react-router-dom';


/*这里是导出一个App组件 实例  */
export default class App extends Component{

    render(){

        return (
            <Router>
                <div>
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