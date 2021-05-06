import React, { Component } from "react";
import PropTypes from 'prop-types'

class Headline extends Component {

  constructor(props){
    super(props);

  }
  render() {

    const {header,desc} = this.props;

    if(!header)
      return null;

    return <div className="headlineComponent">
        <h1 className="header">{header}</h1>
        <p className="description">{desc}</p>
    </div>
    
  }
}

Headline.propTypes = {
  header:PropTypes.string,
  desc:PropTypes.string,
  tempArr: PropTypes.arrayOf(PropTypes.shape({
    fname:PropTypes.string,
    lname:PropTypes.string,
    email:PropTypes.string,
    age:PropTypes.number,
    onlineStatus:PropTypes.bool,
  }))
}


export default Headline;