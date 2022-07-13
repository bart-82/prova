import React,{Component} from 'react';

import './App.css';
import ButtonComponent from './shared/design/button/ButtonComponent';

let name:string|number='Bart Czekiel';
name=4
let display=true

class App extends Component {
  state={
    name:'Massimiliano Salerno',
    display:false,
    users:[]
  }
   cancelAction=()=>{
    console.log('annulla')
  }

   backAction=()=>{
    console.log('annulla')
    this.setState({display:false})
    
  }

   nextAction=()=>{
    console.log('annulla')
    this.setState({display:true})
  }

  componentDidMount(){
    fetch
  }

  render(){
    return (
      <React.Fragment>
      <div className="App">
        <h1>Il mio nome è {name}</h1>
        <ButtonComponent clickButton={this.cancelAction} text='Annulla'></ButtonComponent>
        <ButtonComponent clickButton={this.backAction} tex='Indietro'></ButtonComponent>
        <ButtonComponent clickButton={this.nextAction} text='Avanti'></ButtonComponent>
      </div>
      {display ? <div>{8+8}</div>: 'Non visualizzare numeri'}
      {/* posso aggiungere altri tag fuori dal tag padre solo grazie a React Fragment */}
      </React.Fragment>
    );
  }
 
}

export default App;
