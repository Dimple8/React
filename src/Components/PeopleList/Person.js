import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <li className="person">
                   <div className="person-info">
                       <div className="person-id"> {this.props.key} </div>
                       <div className="person-name"> {this.props.name} </div>
                   </div>
               </li>
    );
  }
}

export default Person; // Don’t forget to use export default!
