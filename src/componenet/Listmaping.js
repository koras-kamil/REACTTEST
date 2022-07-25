

import React, { Component } from 'react';
import Passing from './Passing';
export default function Listmaping  (){
const names=[
 {id:1 , name:"koras" , age:12}
 , {id:2 , name:"muzhda" ,  age:21}



];
let Listnaes= names.map(nawakan => <Passing nr={nawakan} />)
return(

<div>
    {Listnaes}
</div>

)

 
}
