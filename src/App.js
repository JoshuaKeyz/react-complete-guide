import React, { Component } from 'react';
import Person from './Person/Person';
import classFile from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'adasdfa', name: 'Max', age: 28 },
      { id: 'fldldld', name: 'Manu', age: 29 },
      { id: 'lslsill', name: 'Stephanie', age: 26 }
    ],
    showPersons: false
  }
  deletePersonHandler = (idx) => {
    let newState = [...this.state.persons]
    newState.splice(idx, 1);
    this.setState({ persons: newState });
  }
  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(person=> person.ids === id);
    const person = {...this.state.persons[personIdx]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIdx] = person;
    this.setState({
      persons: persons
    })

    // const personIdx = this.state.persons.findIndex((person) =>
    //   person.id === id);
    // const person = Object.assign({}, this.setState.persons[personIdx]);

    // person.name = event.target.value;
    
  }
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  render() {
    let persons = null;
    let btnClass= '';
    if (this.state.showPersons) {
      persons = (<div>
        {this.state.persons.map((person, index) => {
          return (
            <li key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(e) => this.nameChangedHandler(e, person.id)} />
            </li>
          );
        })

        }
      </div>);
      btnClass=classFile.Red;
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(classFile.red);  // Classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push(classFile.bold);
    }

    return (
        <div className={classFile.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>

    );
  }
}

export default App;
