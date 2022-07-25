import React, { Component } from 'react';

class If_condition_rendering extends Component {

    constructor(){
        super() 
        this.state={
            islogedin:true
        }
    }
  render() {
   return(
    this.state.islogedin ? <div>welcome koras</div> : <div>welocme guest</div>
   )
    
  }
}

export default If_condition_rendering;
