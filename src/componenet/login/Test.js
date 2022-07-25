import React, { Component } from 'react'

class Test extends Component {

    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        // Set initial state (ONLY ALLOWED IN CONSTRUCTOR)
        this.state = {
        greeting: 'Hello!' , counter:1 , name:"koras"
        };
        }
        click(e) {
         this.setState({ name: 'John Doe' }, console.log('Hi there'));


               
            }
            
           
  render() {
    return (
      <div>

<p>{this.state.name}</p>
   <button onClick={this.click}>click me </button>
      </div>
    )
  }
}

export default Test

function incrementCounter(previousState, currentProps) {
    return {
    counter: previousState.counter + 1
    };
   }
   