import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom';
import logo from './gif.gif'

export default class Controller extends Component {
  render() {
    return (
      <div className ="project_all">
        <div className = "project_nav">
          <Link className= "nav_left" exact to = '/work/appraise'><h3>Appraise.me</h3></Link>
          <Link className= "nav_right" exact to = '/work/site'><h3>Website</h3></Link>
        </div>

        <div className = "about_project">

          <div className = "project_icon" >
            <img  src = {require('./microcontroller.png')} alt = 'still me'/>
            <span> My microcontroller project</span>
          </div>

          <div className = "project_summary">
            <span>Project Date:March 2018</span>
            <p>A microcontroller project I started to put some of my hardware knowledge to use. The project was built from scratch from start(soldering the LEDs) to finish(programming the game). The end product was a Pong game(similar to the Atari pong game) using the accelerometer on the microcontroller to control the paddles. The project is created using the KL-43z board, MCUexpresso SDK and tons of solder.</p>
          
          </div>

          <a className = 'you_link' href = "https://www.youtube.com/watch?v=-kNhfIZlkU0&t=36s"  >
            <Popup trigger ={<img className = 'YouTube' src = {require('./YouTube.png')} alt =" youtube"/> } 
              on = {['hover', 'focus']} offsetX= {-25} offsetY ={-1800} contentStyle={{ width: '500px', border: 'none' }} >
               <img className= 'gif' src={logo} alt="Computer man"></img>
               Click the YouTube Logo to check it out! 
            </Popup>

            <h3 >Hover Me!</h3>

          </a>

        </div>

      </div>


    );
  }
}
