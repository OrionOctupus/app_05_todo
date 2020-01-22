import React from 'react';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props);

  this.state = {
    items : [
      {
        id:0, title: "Важное дело",done: true
      },
      {
        id:1, title: "Еще одно важное дело", done: false
      },
      {
        id:2, title:"Неповерить совим глазам", done: false
      }
    ],
    input: '',
    telo: [],
  };
  this.addedItem = this.addedItem.bind(this);
  this.chahgeInput = this.chahgeInput.bind(this);
  this.pressEnter = this.pressEnter.bind(this);
}

addedItem = () => {
  console.log('click');
  
  this.setState(state=>{

    let items = this.state.items;

    items.push({
      id: this.state.items.length,
      title: this.state.input,
      done: false
    });

    return items;
  });
  this.setState({
    input: ''
  })
    console.log(this.state);
}

// adderItem = () => {
//   console.log('click');
  
//   this.setState(state=>{

//     let telo = this.state.telo;

//     telo.push(this.state.input);

//     return telo;
//   });
//   this.setState({
//     input: ''
//   })
//     console.log(this.state.telo);
// }

chahgeInput(e) {
  this.setState({input: e.target.value})
  console.log('изменения');
}

pressEnter(e){
  if(e.key ==='Enter'){
    console.log('нажата');
    this.addedItem();
  }
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

          <input onKeyPress={this.pressEnter} onChange={this.chahgeInput} value={this.state.input}></input>
          <button  onClick={this.addedItem}>+</button>
        </div>
    );
  }
  
}

export default App;
