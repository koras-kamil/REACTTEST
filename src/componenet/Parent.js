import React, { Component } from 'react';
import Child from './Child';
export class Parent extends Component {
constructor (){

super() 
  this.state =  { 
 name:"koras bawka " , age :'12'
}



}

greetkoras ()
{
  this.setState ={name :"mn gordram "}
    alert(`hello this state in parent class ${(this.setState.name)}`)
}

  render() {
    return (
      <div>
        <Child  re={()=> this.greetkoras ()}/>
      </div>
    );
  }
}

export default Parent;
