import React, { Component,Fragment } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Img from '../Img/Img';
import Div from "../Div/Div";
import './Form.css';

class Form extends Component {
    state = {
        data:[],
        date:new Date(),
        lat:null,
        lon:null,
        warning:"Both inputs fields are required to fill!!!",
        image:"There is no image matches with the entered data",
        displayDiv:"none",
        display:"none",
        show:"none",
        src:""
    }
    callback = (e) => {
        switch(e.target.id){
          case "lat":
            this.setState({lat:e.target.value})
          break;
          default:
            this.setState({lon:e.target.value})
        }
      }
      start = ()=>{
          if (this.state.lat && this.state.lon) {
        fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${this.state.lon}&lat=${this.state.lat}&date=${this.state.date.getFullYear()}-${this.state.date.getMonth()}-${this.state.date.getDate()}&dim=0.15&api_key=DEMO_KEY`)
            .then((resp) => {return resp.json()})
            .then((results) => { 
            this.setState({data: results})
          })
          .then(()=>{
              if(this.state.data["url"]){
                  this.setState({src:this.state.data["url"],show:"block",displayDiv:"none",display:"none"})
              } else{
                this.setState({displayDiv:"block",show:"none",display:"none"})
              }
          })          
        } 
      else {
          this.setState({display: "block",displayDiv:"none",show:"none"})
      } 
    }
  render() {
    return (
        <Fragment>
        <div className="form" >
            <div className="inp_edit">
              <Input id="lat" type="number" step="0.01" classLabel="label" placeholder="Latitude" callback = {this.callback} val = {this.state.lat}/>          
              <Input id="lon" type="number" step="0.01"  classLabel="label" placeholder="Longitude" callback = {this.callback} val = {this.state.lon}/>
            </div>
              <Div className = "warningText" display = {this.state.display} name = {this.state.warning}/>
              <Button className={"startBtn"} name = {"Start"} click = {this.start }/>
        </div> 
        <Div className = "warningText" display = {this.state.displayDiv} name = {this.state.image}/>
        <Img src={this.state.src} show={this.state.show}/>
        </Fragment>       
        );
    }
}
export default Form;