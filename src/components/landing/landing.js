import Header from '../header/header'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Work from '../pages/Work/Work'
import React, { Component } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

class Land extends Component {
  render() {
    return (
      <Router>
          <div className = "landing_page">
            <Header />
                  <Routes >
                    <Route path ="/"  element = {<Home/>}/> 
                    <Route path ="/about"  element = {<About/>}/>
                    <Route path ="/contact"  element = {<Contact/>}/>
                    <Route path ="/work/*" element = {<Work/>}/>
                  </Routes>

          </div>




      </Router>



    );
  }
}


export default Land;
