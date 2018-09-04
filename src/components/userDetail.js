/**
 * Created by apple on 18/9/3.
 */
import React,{Component} from 'react';

export default class userDetail extends Component {

    render(){

        console.log(this.props);
        return (
            <div>

                {this.props.match.params.id}

            </div>
        )
    }
}