import React, { Component } from 'react';
import Website from './Project_components/Website';
import Controller from './Project_components/Controller';
import Appraise from './Project_components/Appraise_me';
import { Routes, Route, Link} from 'react-router-dom';

export default class Project extends Component {
  render() {
    return (
      <React.Fragment>
          <div className = "works">
          <Routes>
            <Route exact path = '/' element = {<Works/>} />
            <Route exact path = '/appraise' element = {<Appraise/>}/>  
            <Route exact path = '/controller' element ={<Controller/>}/>
            <Route exact path = '/site' element = {<Website/> }/> 
          </Routes>
        </div>

      </React.Fragment>
    );
  }
}


class Works extends Component {
  render() {
    return (
      <React.Fragment>
          {works}
      </React.Fragment>
    );
  }
}
const works = [
  <Link key ={1} className ="work_link" to ="/work/controller"><img loading="lazy" className = 'work_items' src={require('./microcontroller.png')} alt ="microcontroller"/>
  <span>My microcontroller project</span></Link>
  ,
  <Link key ={2} className ="work_link" to ="/work/site"><img loading="lazy" className = 'work_items' src={require('./sprite2.png')} alt ="me"/><span>Personal Website </span>
  </Link>
  ,
  <Link key ={3} className ="work_link" to ="/work/appraise"><img loading="lazy" className = 'work_items' src={require('./Appraise-me.png')} alt ="appraise.me"/> <span></span>An appraisal system
  </Link>

];
