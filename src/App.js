import React from 'react';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props);

  this.state = {
    items : [
      {
        id:1, title: "Важное дело",done: true
      },
      {
        id:2, title: "Еще одно важное дело", done: false
      },
      {
        id:3, title:"Неповерить совим глазам", done: false
      }
    ],
    input: '',
  };
  // this.adderItem = this.adderItem.bind(this);
  this.chahgeInput = this.chahgeInput.bind(this);
}

adderItem () {
  console.log('clicl');
}

chahgeInput(e) {
  this.setState({input: e.target.value})
}

  render(){


    return (
      <div className="app">
        <header>
          <h1>ToDo List</h1>
        </header>
        
          <div>
            {this.state.items.map(item => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
            <p>{this.state.input}</p>

          <input onChange={this.chahgeInput}></input>
          <button onClick={this.adderItem}>+</button>
        </div>
    );
  }
  
}

export default App;
