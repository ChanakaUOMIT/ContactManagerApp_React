import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';


class Contact extends Component {
    state={
        showContactInfo:false
    };


    static propTypes ={
        contact : PropTypes.object.isRequired,
        // deleteClickHandler: PropTypes.func.isRequired
    };

    onShowClick = () => {
        console.log("Show");
        this.setState({ showContactInfo: !this.state.showContactInfo
        })
    };

    // onDeleteClick=(id, dispatch) =>{

    //     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}));

    //     console.log("Delete Click");
    //     // this.props.deleteClickHandler();        
    // }

    onDeleteClick= async (id, dispatch) =>{
        try{
            await axios.delete
            (`https://jsonplaceholder.typicode.com/users/${id}`);
            
            dispatch({type: 'DELETE_CONTACT', payload: id});   
        }catch(e){
            dispatch({type: 'DELETE_CONTACT', payload: id});
        };
        }

  render() {
      const { id, name, email, phone}=this.props.contact;
      const { showContactInfo } = this.state;
    return (

        <Consumer>
            {value => {

                const { dispatch }=value;

                return(
                    <div className="card card-body mb-3">
                        <h4> {name}{' '} 
                            <i 
                                onClick={this.onShowClick} 
                                className="fas fa-sort-down" 
                                style= {{cursor: 'pointer'}}
                            />

                            <i className="fas fa-times"
                                style={{cursor:'point', float:'right', color:'red'}}
                                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                            />

                            <Link to={`contact/edit/${id}`}>
                                <i 
                                    className="fas fa-pencil-alt" 
                                    style={{
                                        cursor:'pointer',
                                        float:'right',
                                        color: 'black',
                                        marginRight: '1rem'
                                    }}
                                />                                         
                            </Link>
                        </h4>

                        {this.state.showContactInfo ? (
                            <ul>
                            <li className="list-group-item">Email : {email}</li>
                            <li className="list-group-item">Phone : {phone} </li>
                        </ul>
                        ): null}
                        
                    </div>
                )
            }}
        </Consumer>

      
    )
  }
}

//Validation
// Contact.propTypes ={
//     name : PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired
// };

export default Contact;
