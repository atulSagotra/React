import React, { Component } from 'react';
// import { Consumer } from '../../Context';
// import {v1 as uuid} from "uuid"; 
import TextInputGroup from '../layout/TextInputGroup'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {addContact} from '../../actions/contactAction'
class AddContact extends Component {
    state = {
        name : '',
        email: '',
        phone: '',
        errors: {}
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
        const newContact = {
            // id: uuid(),
            name,
            email,
            phone
        }
        this.props.addContact(newContact);

        //// SUBMIT CONTACT ////
        


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
            <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit = { this.onSubmit.bind(this) }>
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
                        <input type="submit" value="Add Contact" className= "btn btn-light btn-black" />
                    </form>
                </div>
            </div>
        )
        
    }
}

AddContact.propTypes = {
    addContact: PropTypes.func.isRequired
}

export default connect(null, {addContact})(AddContact);
