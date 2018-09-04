/**
 * Created by apple on 18/9/3.
 */

import React,{Component} from 'react';

export default class userAdd extends Component {


    /*
       ref: 引用 代表真实的dom元素  最终要挂载到
       把input框的真实dom元素挂载到页面上去
     */


    // changeValue = ()=>{
    //
    //     console.log(this.refs);
    // }
    //


    handleSubmit = ()=> {

        // 获取input的value值
      let name = this.name.value;
       //从缓存中读取用户列表字符串  null  字符串
        let userStr = localStorage.getItem('users');
        //将取出的字符串 转为对象
         let users = userStr?JSON.parse(userStr):[];
        //往数组加入新的对象
         users.push({id:Date.now(),name});
        //再把新数组保存到缓存
         localStorage.setItem('users',JSON.stringify(users));

        //注意: 这里是通过history对象的push方法 跳转到用户页面
          this.props.history.push('/user/userList');


    }

    render(){

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <div className="form-group">
                       {/*<label htmlFor="name">姓名</label>: <input type="text" className="form-control" ref= 'inputHtml' onChange={this.changeValue} />*/}
                       <label htmlFor="name">姓名</label>: <input type="text" className="form-control" ref= {ref=>this.name=ref} onChange={this.changeValue} autoFocus />

                   </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>

                </form>
            </div>
        )
    }
}