import { Component } from 'react'  
import Card from '../components/Card.js'
import '../ui/App.css';    
import {animals} from '../animalList.js'
/* import Search from './Search.js'  */
  
/* const Animals = () => { */

class Animals extends Component {

    state = {
    animals: animals,
    searchInput: ''
  }  

  /* removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
   this.setState({
     animals: updatedArray
   }) 
 } */

/* Animals = (props) => {
  const searchFilter = props.data.filter(animal => {
    return animal.name.includes(props.searchInput)
   }) */ 

 /*   searchFilter.map((item) => <Card
        key={item.name}
        name={item.name}
         />)}
 } */



/*   searchHandler = (e) => {
  this.setState({
    searchInput: e.target.value
  })
}  */

    render() {

        return <>
      
       <p id = 'title'>Animal Gallery</p>
      <main>
     {/*  <Search searchHandler = {this.props.searchHandler} /> */}

      
    
       {this.state.animals.map(animal => 
        <ul  key = {animal.name}>
      <Card name = {animal.name}
           /*  searchInput = {this.state.searchInput}
            searchHandler = {this.searchHandler} */  
      />
      </ul>)} 

</main>  

    </> 
    }  
    
  }  


/* } */

 


export default Animals 