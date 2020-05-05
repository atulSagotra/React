import React, { Component } from 'react';
// import { Consumer } from '../../Context';
// import {v1 as uuid} from "uuid"; 
import TextInputGroup from '../layout/TextInputGroup'
// import uuid from 'uuid';
import axios from 'axios' 
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContact,updateContact } from '../../actions/contactAction'

class EditContact extends Component {
    state = {
        name : '',
        email: '',
        phone: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps,nextState){
        const {name,email,phone} = nextProps.contact;
        this.setState({
            name,
            email,
            phone
        })
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.getContact(id)
        
    }

    onSubmit =  (e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;
        // Check for errors
        if(name === ""){
            this.setState({errors: { name: "Name is Required"}})
            return;
        }
        if(email === ""){
            this.setState({errors: { email: "Email is Required"}})
            return;
        }
        if(phone === ""){
            this.setState({errors: { phone: "Phone is Required"}})
            return;
        }
        

        const { id } = this.props.match.params;

        const updContact = {
            id,
            name,
            email,
            phone
        }

        this.props.updateContact(updContact)

        //// UPDATE CONTACT ////     


        //clear state
        this.setState({ 
            name: '',
            email: '',
            phone: '',
            errors: {}
        });
        this.props.history.push('/')
    }
    onChange = (e) => this.setState({ [e.target.name]: 
        e.target.value });
   
    

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <div className="card mb-3">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                    <form onSubmit = { this.onSubmit }>
                        <TextInputGroup
                            label = "Name: "
                            name = "name"
                            placeholder = "Enter Name..."
                            value = { name }
                            onChange = {this.onChange}
                            errors = {errors.name}
                            />
                        <TextInputGroup
                            label = 'Email: '
                            type = 'email'
                            name = 'email'
                            placeholder = "Enter Email..."
                            value = { email }
                            onChange = {this.onChange}
                            errors = {errors.email}
                            />
                        <TextInputGroup
                            label = "Phone: "
                            name = "phone"
                            placeholder = "Enter Phone..."
                            value = { phone }
                            onChange = {this.onChange}
                            errors = {errors.phone}
                            />                        
                        <input type="submit" value="Edit Contact" className= "btn btn-light btn-black" />
                    </form>
                </div>
            </div>
                  
        )
        
    }
}
EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    getcontact: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    contact: state.contact.contact
})
export default connect(mapStateToProps, {getContact, updateContact} )(EditContact);
