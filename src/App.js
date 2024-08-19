import React, { Component } from 'react';
import './App.css';
import Person from './components/Person.js';

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Maaz', position: '1st' },
      { id: 'asd2', name: 'Kashif', position: '2nd' },
      { id: 'asd3', name: 'Ayaz', position: '3rd' }
    ],
    showPersons: false
  }

  handleSwitchName = (newName) => {
    this.setState({
      persons: [
        { name: newName, position: '3rd' },
        { name: 'Kashif', position: '2nd' },
        { name: 'Hania', position: '1st' }
      ]
    });
  }
  
  handleNameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    this.setState(prevState => ({ showPersons: !prevState.showPersons }));
  }

  render() {
    const buttonStyle = {
      backgroundColor: 'black',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              Name={person.name}
              Model_Possition={person.position}
              key={person.id}
              changed={(event) => this.handleNameChange(event, person.id)}
            />
          })}
        </div>
      );
      buttonStyle.backgroundColor = 'white';
      buttonStyle.color = 'black';
    }

    let Assignclasses = [];
    if (this.state.persons.length <= 2) {
      Assignclasses.push('black'); // [black]
    }
    if (this.state.persons.length <= 1) {
      Assignclasses.push('bold'); // [black, bold]
    }
    if (this.state.persons.length <= 0) {
      Assignclasses.push('shadow'); // [black, bold, shadow]
    }

    return (
        <div className='App'>
          <h1>Hi, I Am React</h1>
          <p className={Assignclasses.join(" ")}>This is really work</p>
          <button
            style={buttonStyle}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
