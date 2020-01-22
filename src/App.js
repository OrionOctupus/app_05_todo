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
    telo: [],
  };
  this.adderItem = this.adderItem.bind(this);
  this.chahgeInput = this.chahgeInput.bind(this);
}

adderItem = () => {
  console.log('click');
  // let tel = this.state.telo.push('8');
  this.setState(state=>{

    let telo = this.state.telo;

    telo.push(this.state.input);

    return telo;
  });
  this.setState({
    input: ''
  })
    console.log(this.state.telo);
}

chahgeInput(e) {
  this.setState({input: e.target.value})
  console.log('изменения');
}


  render(){
    return (
      <div className="app">
        <header>
          <h1>ToDo List</h1>
          <button>X</button>
        </header>
    {this.state.telo.map(it=>(
      <li>{it}</li>
    ))}
          <div>
            {this.state.items.map(item => (
              <p key={item.id}>{item.title}</p>
            ))}
          </div>
            <p>{this.state.input}</p>

          <input onChange={this.chahgeInput} value={this.state.input}></input>
          <button onClick={this.adderItem}>+</button>
        </div>
    );
  }
  
}

export default App;
