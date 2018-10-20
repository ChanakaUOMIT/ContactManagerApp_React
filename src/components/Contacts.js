import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {
   // constructor(){
        //super();
        /*this.*/
        // state={
        //     contacts:[
        //         {
        //             id:1,
        //             name:'Chanaka Sampath',
        //             email:'chanakauomfit@gmail.com',
        //             phone: '555-5555-5555'
        //         },

        //         {
        //             id:2,
        //             name:'React',
        //             email:'react@gmail.com',
        //             phone: '898-5625-7892'
        //         },

        //         {
        //             id:3,
        //             name:'React Native',
        //             email:'ReactNative@gmail.com',
        //             phone: '456-8923-4525'
        //         },
        //     ]
        // };
    //}

    deleteContact=(id)=>{
        console.log("Delete Contact : " +id);

        const newContacts=this.state.contacts.filter(contact =>
            contact.id !== id);

        this.setState({
            contacts: newContacts,
        })
    }

  render() {
      return(
          <Consumer>
              {value => {
                  return(
                    <React.Fragment>
                        {value.contacts.map(contact=>(
                            // <h1>{contact.name}</h1>
                            <Contact 
                                key={contact.id}
                                contact={contact}
                                //deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                                
                                // name={contact.name} 
                                // email={contact.email}
                                // phone={contact.phone}
                            />
                        ))}
                  </React.Fragment>
                  )
              }}
          </Consumer>
      )
     
  }
}

export default Contacts;
