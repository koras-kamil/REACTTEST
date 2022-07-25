import React, { Component } from "react";

import { useState } from "react";

class Test  extends Component{

constructor(){
    super()
        this.state = { message:  "chone qa7ba" , name:"koars" } 
    
        // this.eventhandl = this.bgor.bind(this) ڕێگای یەکەم bind کردن 
}

bgor= () => {    //ڕێگای دووەم ناساندنی فەکشذنەکە بە ئارۆو فەکشن 
    this.setState({  message : "chone kwre pyaw "

    })
}

eventhandl(){
    console.log("clicked buttin ");

}
render(){
 return    <div>

<h1 className=" text-center">
    {this.state.message +  this.state.name}

</h1>

    <button  onClick={this.bgor} className="btn-dark">click me</button>
    {/* <button  onClick={this.bgor.bind(this)} className="btn-dark">click me</button> ڕێگای سێێەم بایند کردن لە ناو کلیک بەڵام بە بایندکردنەوە  */}
    </div>
}

}
// ڕێگای چوارەمی بایند کردن بریتیە لە ئارۆو فەکشن لە ناوبەتنەکەدا 
export default Test ;