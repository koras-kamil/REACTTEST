// import React, { Component } from "react";

// class Login extends Component {

// constructor (props){
// super(props)

// this.state={
//     name:'koras'
// };

 
// }

// render(){
//     return <div>
//        <button onClick={this.state.name}>
//         click bka bo gorene nawaka 
        
//        </button>
//        {construc}
//     </div>
// }

// }
// export default Login;


// const PrintHello = ComposedComponent => class extends Component {
// onClick() {
// console.log('heloo');
// }
// /* The higher order component takes another component as a parameter
// and then renders it with additional props */
// render() {
// return <ComposedComponent {...this.props } onClick={this.onClick} />
// }
// }
// const FirstComponent = koras => (
    
//     <div onClick={ koras.onClick }>
//     Hello, {koras.ComposedComponent}! I am a FirstComponent.
//     </div>
//     );
   
//     const ExtendedComponent = PrintHello(FirstComponent);
//     export  {FirstComponent , PrintHello};

//  export  const Koras= ({name , age} ) =>
//  { return ( 
//  <div>
//  <p>
//   hi   {name}   
//    , age : {age}
//       </p></div>  )}

// export default Koras;

import React, { Component } from "react";

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onInputchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmitForm() {
    const {koskaso}= this.state
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <div>
          <label>
            First Name :
            <input
              name="fname"
              type="text"
              value={this.state.fname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Last Name :
            <input
              name="lname"
              type="text"
              value={this.state.lname}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
          <label>
            Email :
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onInputchange}
            />
          </label>
        </div>
        <div>
            <button onClick={this.onSubmitForm}>Submit</button>
        </div>
      </div>
    );
  }
}

export default SimpleForm;