import React, { Component } from 'react';
import '../login/style.css'


export class Forms extends Component {
constructor (){
    super() 
    this.state={
        name:' ' , pass:' '
       
    } 
}
Handlerusername= (event) => {
this.setState({
    name: event.target.value
})
}
Hnadlerpass= (event) =>{
this.setState({
   pass: event.target.value
})
}
handlesumbit = (event) => {
  document.getElementById("root").innerHTML=(` ناوەکەت بریتیە : ${this.state.name} + پاسوۆدەکەت بریتیە لە : ${this.state.pass}`)
  event.preventDefault()
}

  render() {
    return (
      <div className='bg-dark text-light  text-center container'>
        فۆڕمی پڕ کردنەوەی زانیاریەکان 
<div className='row '>
<div className='col'>
<form onSubmit={this.handlesumbit} >
<label className='m-2 p-3' > ناو :</label>
  <input className='m-2' value={this.state.name} onChange={this.Handlerusername} />
<div>
    <label className='m-1 p-2'>پاسۆورد : </label>
   <input value={this.state.pass}  onChange={this.Hnadlerpass} />
</div>
<button  className='button-33 m-4 p-2 pr-4' type='sumbit'>sumbit</button>
<h1>

</h1>

</form>

</div>

</div>
      </div>
    );
  }
}

export default Forms;
