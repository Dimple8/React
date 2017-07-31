import React, { Component } from 'react';
import Person from './Person'; // Import a component from another file
import { PEOPLE } from './People';


class PeopleList extends Component {


  constructor(props, context) {
    super(props, context);
    this.state = {
      displayedPeople: PEOPLE

    };
  };

  handleSearch (event) {
                var searchQuery = event.target.value.toLowerCase();
                var displayedPeople = PEOPLE.filter(function(el) {
                    console.log(el.name.last);
                    var searchValue = el.name.last.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                });

                // this.state = {
                //   displayedPeople: displayedPeople
                //
                // };
                this.setState({
                    displayedPeople: displayedPeople
                });
            };


  render() {
    return (
      <div className="person">
        <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch.bind(this)} />
        <ul className="person-list">
            {
               this.state.displayedPeople.map(function(el) {
                    return <Person
                        key={el._id}
                        name={el.name.first + " " + el.name.last}
                    />;
               })
            }
        </ul>
      </div>
    );
  }
}

export default PeopleList; // Don’t forget to use export default!
