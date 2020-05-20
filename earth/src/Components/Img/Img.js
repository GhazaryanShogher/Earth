import React, { Component } from 'react';
import './Img.css';

class Img extends Component {
  render() {
    return (
        <img className ={this.props.className} src={this.props.src} style = {{display: this.props.show}}/>
    );
  }
}

export default Img;