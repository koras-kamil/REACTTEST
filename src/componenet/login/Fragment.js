import React, { Component } from 'react'
import "../../"
 class Fragment extends Component {
  
  render() {
const koras =[{name:"koras" , age:"12"} , {name:"muzhda" , age:"21"}]
let kurd= koras.map((k) => <h1>{k.name} تەمەنتان {k.age}</h1>)
    return (

     <React.Fragment>

<p>
    {kurd}
</p>
  

</React.Fragment>
    )
  }
}

export default Fragment