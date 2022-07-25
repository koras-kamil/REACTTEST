import React, { Component } from 'react';

 class LifeCycle extends Component {

constructor(){
    super()
    this.state={
        color:"red"
    }

}
 static getDerivedStateFromProps(props,state){
 return {color: props.fav}
 }

  render() {
    return (
      <div>
        <p>
            my favoriot color is {this.state.color}
        </p>
      </div>
    );
  }
}

export default LifeCycle;
