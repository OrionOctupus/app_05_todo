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
        id:2, title:"Не поверить совим глазам", done: false
      }
    ],
    input: '',
    telo: [],
  };
  this.addedItem = this.addedItem.bind(this);
  this.chahgeInput = this.chahgeInput.bind(this);
  this.pressEnter = this.pressEnter.bind(this);
  this.doneChange = this.doneChange.bind(this);
  this.delItem = this.delItem.bind(this);
}

addedItem() {
  console.log('click');
  if(this.state.input.trim().length < 3){
    alert('Слишком короткая задача');
  }else{
  this.setState((state)=>{

    let {items} = this.state;

    items.push({
      id: this.state.items.length,
      title: this.state.input,
      done: false
    });

    // return items;
  });

  this.setState({
    input: ''
  })
}
    console.log(this.state);
}

chahgeInput(e) {
  this.setState({input: e.target.value})
  console.log('изменения');
}

pressEnter(e) {
  if(e.key ==='Enter'){
    console.log('нажата');
    this.addedItem();
  }
}

doneChange(e) {
  console.log(this.state.items.id);
}


//работает неправильно ???
delItem() {
console.log('delete');

  this.setState(() => {
    let items = this.state.items;
      for(let i=0; i<=items.length; i++){
        if(items[i].done){
          delete items[i];
        }
      }
      return items;
    });
}


  render(){
    return (
      <div className="app">
        <header>

          <h1>ToDo List</h1>
          <button onClick={this.delItem}>X</button>

        </header>
  
          <div>
            {this.state.items.map(item => (
            <p key={item.id} onClick={this.doneChange}>
              {item.done ? 'Готово  ' : 'Не готово  '}  
              {item.title}
            </p>
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