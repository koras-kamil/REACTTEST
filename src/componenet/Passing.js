import React, { Component } from 'react';

export function Passing({nr}) {

    return (
        <div className='text-center bg-dark text-light' >
  {
    nr.name
  } , {nr.age} , {nr.id}
        </div>
        
    );

}

export default Passing;
