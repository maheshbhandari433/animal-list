import { Component } from 'react'  
import Card from '../components/Card.js'
import '../ui/App.css';   
import {birds} from '../animalList.js'  

class Birds extends Component {

    state = {
    birds: birds,
  }  


    render() {

        return <>
      
       <p id = 'title'>Bird Gallery</p>
      <main>
    
       {this.state.birds.map(bird => 
        <ul  key = {bird.name}>
      <Card name = {bird.name} />
      </ul>)} 

</main>  

    </> 
    }  
    
}

export default Birds