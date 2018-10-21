import React, { Component } from 'react'
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {

    state ={
        name:'',
        email:'',
        phone:''
    };

    onSubmit=(dispatch, e)=>{
        e.preventDefault();
        //console.log(this.state);
        const { name, email, phone }=this.state;

        const newContact={
            id:uuid(),
            name,
            email,
            phone
        };

        //dispatch({ type: 'ADD_CONTACT', payload: newContact});
        dispatch({type: 'ADD_CONTACT', payload: newContact});

        //Clear State
        this.setState({
            name:'',
            email:'',
            phone:''
        })
    };

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    };
    

  render() {
      const { name, email, phone }=this.state;

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
                            />

                             <TextInputGroup 
                                label="Email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={this.onChange}
                            />

                             <TextInputGroup 
                                label="Phone"
                                name="phone"
                                placeholder="Enter Phone"
                                value={phone}
                                onChange={this.onChange}
                            />

                            {/* <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input 
                                    type='text'
                                    name='name'
                                    className='form-control form-control-lg'
                                    placeholder="Enter Name..."
                                    value={name}
                                    onChange={this.onChange}
                                />
                            </div>
            
                             <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input 
                                    type='email'
                                    name='email'
                                    className='form-control form-control-lg'
                                    placeholder="Enter Email..."
                                    value={email}
                                    onChange={this.onChange}
                                />
                            </div>
            
                             <div className="form-group">
                                <label htmlFor="name">Phone</label>
                                <input 
                                    type='text'
                                    name='phone'
                                    className='form-control form-control-lg'
                                    placeholder="Enter Phone..."
                                    value={phone}
                                    onChange={this.onChange}
                                />
                            </div> */}
            
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
