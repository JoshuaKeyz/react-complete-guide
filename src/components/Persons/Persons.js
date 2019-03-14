import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  console.log('[Person.js] rendering');
  return props.persons.map((person, index) => {
    return (
      <li key={person.id}>
        <Person
          name={person.name}
          age={person.age}
          click={() => props.clicked(index)}
          changed={(e) => props.changed(e, person.id)} />
      </li>
    );
  })
}
export default persons;
