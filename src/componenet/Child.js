import React from "react";

function Child(props){
    return (

<div>
    <button onClick={props.re.bind(this)}> click me </button>
</div>

    )    



}

export default Child ;