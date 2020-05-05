import React, { Component } from 'react'
import '../contact.css'
import PropTypes from 'prop-types'
// import { Consumer } from '../../Context'
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { deleteContact } from '../../actions/contactAction'

class Contact extends Component {
    state= {
        showContactInfo: false
    }
    onShowClick = e =>{
            this.setState({ showContactInfo: !this.state.showContactInfo })    
    }
    onDeleteClick = id =>{
        this.props.deleteContact(id)
        
    }
 
    render() {        
        const {id,name,email,phone} = this.props.contact;
        const { showContactInfo } = this.state;
        return (

            <div className = "card card-body mb-3 text-left">
                <h4>{name} <i onClick = {this.onShowClick}
                className="fa fa-sort-down" style = {{ cursor: 'pointer'}}></i>
                <i className="fa fa-times" style = {{ cursor : 'pointer', float:'right',color:'red'}}
                onClick = {this.onDeleteClick.bind(this,id)}
                />
                <Link to = {`contact/edit/${id}`}> <i className="fa fa-pencil" 
                style = {{
                    cursor:'pointer',
                    float: 'right',
                    color:'black',
                    marginRight: '1rem'
                }}/>
                </Link>
                </h4>
                {showContactInfo ? (
                    <ul className = "list-group">
                    <li className = "list-group-item">Email: {email}</li>
                    <li className = "list-group-item">Phone: {phone}</li>
                </ul>
                ): null }
                
            
            </div>
            
        )
}
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteContact: PropTypes.func.isRequired
    // deleteClickHandler: PropTypes.func.isRequired
}
export default connect(null, { deleteContact })(Contact);
