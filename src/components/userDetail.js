/**
 * Created by apple on 18/9/3.
 */
import React,{Component} from 'react';

export default class userDetail extends Component {



    render(){


        //从缓存中读取用户列表字符串  null  字符串
        let userStr = localStorage.getItem('users');
        //将取出的字符串 转为对象
        let users = userStr?JSON.parse(userStr):[];





        let id = this.props.match.params.id;
        //根据id 找到id对应的user
        let user = users.find(user => user.id == id);
        //
        // let user = users.find(function (user) {
        //
        //     return user.id == id;
        // })


        console.log(user);


        return (
            <table className="table table-bordered">
               <thead>
               <tr>
                   <td>ID</td>
                   <td>姓名</td>
               </tr>
               </thead>

               <tbody>
                <tr>
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                </tr>
               </tbody>

            </table>
        )
    }
}