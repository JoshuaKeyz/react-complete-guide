import React, { Component } from 'react';
import Person from './Persons/Person/Person';
import Persons from './Persons/Persons';
import classFile from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');

    this.state = {
      persons: [
        { id: 'adasdfa', name: 'Max', age: 28 },
        { id: 'fldldld', name: 'Manu', age: 29 },
        { id: 'lslsill', name: 'Stephanie', age: 26 }
      ],
      showPersons: false
    }
  }
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }
  
  deletePersonHandler = (idx) => {
    let newState = [...this.state.persons]
    newState.splice(idx, 1);
    this.setState({ persons: newState });
  }
  nameChangedHandler = (event, id) => {
    const personIdx = this.state.persons.findIndex(person=> person.id === id);
    const person = {...this.state.persons[personIdx]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIdx] = person;
    this.setState({
      persons: persons
    })    
  }
  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }
  componentDidMount() {
    console.log('[App.js] componentDidMount ')
  }
  render() {
    console.log('[App.js] render')
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}></Persons>

    }
    
    return (
        <div className={classFile.App}>
        <Cockpit showPersons={this.state.showPersons} 
          persons={this.state.persons}
          title={this.props.appTitle}
          clicked={this.togglePersonsHandler}/>
          {persons}
        </div>

    );
  }
}

export default App;
