import React, { Component } from 'react'

export default class Icons extends Component {
  render() {
    return (
      <div className = "icon_bar">
        <a href = "https://www.facebook.com/dnlpng"><img loading="lazy" className="facebook" src={require('./facebook2.png')} alt ="facebook"/></a>
        <a href = "https://www.instagram.com/dnlpng/"><img loading="lazy" className="instagram" src={require('./instagram.png')} alt ="instagram"/></a>
        <a href ="https://github.com/MajestryD"><img loading="lazy" className="twitter" src={require('./github.png')} alt ="twitter"/></a>
        <a href = "https://www.linkedin.com/in/dpenguin"><img loading="lazy" className="linkedin" src={require('./linkedIn.png')} alt ="linkedin"/></a>
      </div>
    );
  }
}
