import React, { Component } from 'react';
import './App.css';
import Students from './students.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      list: [],
      pupils: [
        {name: "Chudi", age: 10, hobbies: "Singing and Dancing"},
        {name: "Tony", age: 20, hobbies: "Eating"},
        {name: "Arnold", age: 25, hobbies: "Playing"},
        {name: "Chudi", age: 28, hobbies: "Running"},
        {name: "Richard", age: 20, hobbies: "Coding"}
      ]
    }
  }
  render(){
    return (
      <div className="App">
          <h3>Students List</h3>
          {this.state.pupils.map((pupils,key) => 
            <Students pupils={pupils} key={pupils.name}/>
          )};
      </div>
    );
  }
}

export default App;
