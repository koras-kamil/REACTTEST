import React, { Component } from "react";

import '../App.css'


import login from '../login.svg'





class Body extends Component  {
  
constructor(){
    super()
     this.state ={
username: "", 
password:""

     }

    this.handlepassword= this.handlepassword.bind(this)
    this.handleusername = this.handleusername.bind(this)
    this.handlesumbit=this.handlesumbit.bind(this)
}
handleusername(event){
  this.setState({
    username : event.target.value
  })
}
handlepassword(event){
  this.setState({
    password : event.target.value
  })
}

 handlesumbit(event){
  document.getElementById("root").innerHTML=(`ناوەکەت بریتیە لە : ${this.state.username} + پاسسوۆردەکەت بریتیە لە ${this.state.password}`)
 }
 
render() {
  
  return (
   

  
     <div class="container mt-5 border-2">
    <div class=" text-centered alert alert-primary col-md d-bg-danger-sm-2  container" id="com" role="alert">
    تۆ ئێستا لە پلاتفۆرمی کۆمپیوتەردایت 

</div>
<div class="text-center alert alert-danger col-md  " id="mob" role="alert">
تۆ ئێستا لە پلاتۆفۆرمی مۆبایلدای 
</div>
  <div class="container row centered-div p-0" id="resize">
    <div class="col-md ">
      <form className="row mr-5" onSubmit={this.handlesumbit}>
        <div className="container pr-4 centered-div1 col-sm" >
               <h3 className="mt-3 mb-0 pb-0 " >پانێلی چوونە ژوورەوە</h3>
               <div>
                
               <input className="mt-5" placeholder="یوزەرنەیم"  value={this.state.username} onChange={this.handleusername} />
               <span></span></div>
             <input className="mt-3" placeholder="وشەی نهێنی"  value={this.state.password} onChange={this.handlepassword} />
          <div className="mt-4 mb-4"> <button type="sumbit" className="button-33 mt-0"   > ناردن</button>
           </div> 
          <div classNam="mt-5">
          <p>پاسوۆردەکەت  <span> </span><a href="#"> لەبیر کردووە ؟</a></p></div>
          <span className="pt-2  ">
          <a href="#" id="resgister"  className=" button-33"> بە ئەندامبوون </a>
          </span>
         
           </div>  
        
    
       </form>
    </div>
    <div class="col-md-3 p-2 m-2">
    
         <img className=" border-0  responsive " id="optionalstuff" src={login}></img></div>
  
         
  </div>  
     
 </div>
 

  );
}
    
}

export default Body ;