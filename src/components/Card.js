import React, {Component} from 'react'

const Card =  (props) => {

class Card extends Component {
        state = { 
            counter: 0 
        }

        counterHandler = () => {
            this.setState({
                counter: this.state.counter + 1 
            })
        }

        render() {
            return (
                <>
                <div className = 'card'>

                <p id='name'>{props.name}<br/>Likes: {this.state.counter}</p>

                <div><img src = {`https://source.unsplash.com/400x300/?${props.name}`}
                alt={props.name} /></div> 

            <button onClick={this.counterHandler}>Like</button>

            <div className = "close-button">
            <button onClick ={props.removeCard} className="close">X</button>
            </div>
            </div>
            </>
        )
           }   
    
}
    return (
        <>
<Card />
</>

    )    
       
}  

export default Card 