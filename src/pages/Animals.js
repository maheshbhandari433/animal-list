import { Component } from 'react'  
import Card from '../components/Card.js'
import '../ui/App.css';    
import {animals} from '../animalList.js'
/* import Search from '../ui/Search.js'  */


class Animals extends Component {

    state = {
    animals: animals,
    searchInput: ''
  } 
  
  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
  }

/*   searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }  */

    render() {

        return <>   

        {/*  <Search searchHandler={this.searchHandler}
              searchInput={this.state.searchInput}/> */} 
      
       <p id = 'title'>Animal Gallery</p>
      <main>

       {this.state.animals.map(animal => 
        <ul  key = {animal.name}>
        <Card name = {animal.name}
            removeCard = {() => this.removeHandler(animal.name)}
            data={this.state.animals}/>
      </ul>)} 

      </main>  

    </> 
    }  
    
  } 


export default Animals 