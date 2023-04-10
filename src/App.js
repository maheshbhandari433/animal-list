import React, {Component} from 'react'
import Card from './components/Card.js' 
import {animals} from './animalList.js'
import './App.css';

class App extends Component {

  state = {
    animals: animals,
  }

    render() {

        return <>
       <p id = 'title'>Animal Gallery</p>
    <main>
    
      {this.state.animals.map(animal => 
        <ul  key = {animal.name}>
      <Card name = {animal.name} />
      </ul>)}

</main>

    </>  
    
}
 
}

export default App

