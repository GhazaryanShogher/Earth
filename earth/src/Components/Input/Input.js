import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    

    callback = () => this.props.callback;

  render() {
    return (
          <div className="input-container">
              <label className={this.props.classLabel} >{this.props.text}</label>
              <input value = {this.props.val} id={this.props.id}  className={this.props.class} type={this.props.type} placeholder={this.props.placeholder} required onChange = {this.props.callback}/>
          </div>
    );
  }
}

export default Input;