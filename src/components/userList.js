/**
 * Created by apple on 18/9/3.
 */
import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom'
import './userList.css'

export default class userList extends Component {

    constructor(){

        super()
        this.state = {
            users:[]
        }
    }

    componentWillMount(){

        //从缓存中读取用户列表字符串  null  字符串
        let userStr = localStorage.getItem('users');
        //将取出的字符串 转为对象
        let users = userStr?JSON.parse(userStr):[];

        this.setState({
            users
        })

    }

    deleBtn = (index)=> {
        // alert('删除')

        // alert(index)
        //从缓存中读取用户列表字符串  null  字符串
        let userStr = localStorage.getItem('users');
        //将取出的字符串 转为对象
        let users = userStr?JSON.parse(userStr):[];
        //删除当前点击的 index传过来的li的对象
         users.splice(index,1);

        // console.log(deleteUser);
        console.log(users);
        //再把新数组保存到缓存
        localStorage.setItem('users',JSON.stringify(users));
        // //从缓存中读取用户列表字符串  null  字符串
        // let userStr = localStorage.getItem('users');
        // //将取出的字符串 转为对象
        // let users = userStr?JSON.parse(userStr):[];


        // console.log(index);
        // // console.log(deleteUser);
        // console.log(users);

        this.setState({
            users
        })


    }

    render(){

        return (

            <ul className="list-group">
                {/*<li className="list-group-item" ref='a'><Link to="/user/detail/1">张三</Link></li>*/}
                {/*<li className="list-group-item"><Link to="/user/detail/2">李四</Link></li>*/}
                {/*<li className="list-group-item"><Link to="/user/detail/3">王五</Link></li>*/}
                {/*<li className="list-group-item"><Link to="/user/detail/4">赵六</Link></li>*/}
                {/*<li className="list-group-item"><Link to="/user/detail/5">jack</Link></li>*/}
                {/*<li className="list-group-item"><Link to="/user/detail/6">rose</Link></li>*/}
                {/*<li className="list-group-item"><Link to="/user/detail/7">lily</Link></li>*/}
                {/*<li className="list-group-item"><Link to="/user/detail/8">lucy</Link></li>*/}

                {
                    this.state.users.map((user,index) => (


                        <li className="list-group-item" key={index}>
                            {/*<Link to="/user/detail/2">李四</Link>*/}
                            <Link  to={'/user/detail'+ user.id}>{user.name}</Link>
                            <button className="btn btn-danger btn-sm deleteBtn" onClick={()=> this.deleBtn(index)} >删除</button>
                        </li>
                    ))
                }

            </ul>
        )
    }


}

