import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';


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

    onDeleteClick=(id, dispatch) =>{
        console.log("Delete Click");
        // this.props.deleteClickHandler();
        dispatch({type: 'DELETE_CONTACT', payload: id});
    }
  render() {
      const { id, name, email, phone}=this.props.contact;
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
