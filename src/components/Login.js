/**
 * Created by apple on 18/9/4.
 */

import React from 'react'

export default function (props) {

    return <button className="btn btn-primary" onClick={()=>{

        localStorage.setItem('login','true');
        props.history.push(props.location.state.from)




        /* 打印出来  是 {from: "/profile"} */
        {/*console.log(props.location.state);*/}
    }
    }>登录</button>
}