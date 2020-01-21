import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons:[
      {name:'Max', age:28},
      {name:'Manu', age:29},
      {name:'Stephanie', age:26}
    ],
    otherState:'Some other value',
    showPersons:false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons:[
        {name:newName, age:28},
        {name:'Manu', age:29},
        {name:'Stephanie', age:27}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        {name:'Max', age:28},
        {name:event.target.value, age:29},
        {name:'Stephanie', age:27}
      ]
    })
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.togglePersons;
      this.setState({showPersons: !doesShow});
  }

  render(){
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Max!')} 
            change={this.nameChangeHandler}>My hobbies: Racing</Person>//Use bind always you can
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'am a react App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}


export default App;
