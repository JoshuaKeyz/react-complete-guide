import React from 'react'
import classes from './Cockpit.css';
const cockpit = (props) => {
  let classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.persons.length <= 2) {
    classes.push(classes.red);  // Classes = ['red']
  }
  if (props.persons.length <= 1) {
    classes.push(classes.bold);
  }

  return (
    <div>
      <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={props.clicked}>Switch Name</button>
      </div>
    </div>
  );
};

export default cockpit;