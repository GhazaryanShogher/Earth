import React, {Component, Fragment} from "react";
import './Div.css'

class Div extends Component{

    render () {
        return (
            <Fragment>
                <div className = {this.props.className}  style = {{display: this.props.display}}  text = {this.props.text}>{this.props.name}</div>
            </Fragment>
        );

    }
}
export default Div;