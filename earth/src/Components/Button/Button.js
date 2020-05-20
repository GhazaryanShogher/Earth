import React, {Component, Fragment} from "react";
import './Button.css'

class Button extends Component{
    
    render () {
        return (
            <Fragment>                
                    <button id={this.props.id} className = {this.props.className} onClick = {this.props.click}>{this.props.name}</button>
            </Fragment>
        );

    }
}
export default Button;