import React, { Component } from 'react';

const Context=React.createContext();

const reducer=(state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts:state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }

            default:
            return state;
    }
}

export class Provider extends Component{
    state={
        contacts:[
            {
                id:1,
                name:'Chanaka Sampath',
                email:'chanakauomfit@gmail.com',
                phone: '555-5555-5555'
            },

            {
                id:2,
                name:'React',
                email:'react@gmail.com',
                phone: '898-5625-7892'
            },

            {
                id:3,
                name:'React Native',
                email:'ReactNative@gmail.com',
                phone: '456-8923-4525'
            },
        ],

        dispatch: action =>
            this.setState(state => reducer(state, action))
        
    };

    render(){
        return(
            <Context.Provider value={this.state} >
                {this.props.children}
            </Context.Provider>
        )
    }

}

export const Consumer =Context.Consumer;