import React, { Component } from 'react'
import { Consumer } from '../../context';
//import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {

    state ={
        name:'',
        email:'',
        phone:'',
        errors:{}
    };

    onSubmit= async (dispatch, e)=>{
        e.preventDefault();
        //console.log(this.state);
        const { name, email, phone }=this.state;

        //Check For Errors
        if(name===''){
            this.setState({errors: {name: 'Name is Required'}});
            return;
        }
        if(email===''){
            this.setState({errors: {email: 'Email is Required'}});
            return;
        }
        if(phone===''){
            this.setState({errors: {phone: 'Phone is Required'}});
            return;
        }

        const newContact={
            //id:uuid(),
            name,
            email,
            phone
        };

        // axios.post('https://jsonplaceholder.typicode.com/users', newContact)
        // .then(res =>
        //     //dispatch({ type: 'ADD_CONTACT', payload: newContact});
        //     dispatch({type: 'ADD_CONTACT', 
        //     // payload: newContact
        //     payload: res.data
        //     }) 
        // )

        const res = await axios
        .post('https://jsonplaceholder.typicode.com/users', newContact);
        
        //dispatch({ type: 'ADD_CONTACT', payload: newContact});
        dispatch({type: 'ADD_CONTACT', 
        // payload: newContact
        payload: res.data
        }) 
        

        

        //Clear State
        this.setState({
            name:'',
            email:'',
            phone:'',   
            errors:{}         
        });

        //After submit then Redirect
        this.props.history.push('/');
    };

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };
    

  render() {
      const { name, email, phone, errors }=this.state;

      return(
          <Consumer>
              {value => {
                  const { dispatch }= value;
                  return(
                    <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                            <TextInputGroup 
                                label="Name"
                                name="name"
                                placeholder="Enter Name"
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}
                            />

                             <TextInputGroup 
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}
                            />

                             <TextInputGroup 
                                label="Phone"
                                name="phone"
                                placeholder="Enter Phone"
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}
                            />                           
            
                            <input 
                                type="submit" 
                                value="Add Contact"
                                className="btn btn-light btn-block"                
                            />
                        </form>
                    </div>
                  </div>
                  )
              }}
          </Consumer>
      )   
  }
}

export default AddContact;
