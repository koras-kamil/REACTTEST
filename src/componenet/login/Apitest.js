import React, { Component } from 'react';
import '../../App.css';

export class Apitest extends Component {
  
    state={
        loading: true ,
        person :null
    }
  
  
  async  componentDidMount (){
    const url="https://jsonplaceholder.typicode.com/users" ;
    const response = await fetch (url)
    const data = await response.json();
    
    this.setState({
        person : data.map((user) => <div>ناوەکان :{user.name}</div>),loading:false
    })
   
  }
  render() {
    
    return (
      <div>
        <p>
        {this.state.loading ? <div> تکایە چاوەڕوان بە ...</div> :
         <span className='nawkan'>{this.state.person}</span>}
     </p> </div>
    );
  }
}

export default Apitest;
