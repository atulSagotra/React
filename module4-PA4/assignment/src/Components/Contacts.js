import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
    state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '74185-36548',
                },
                {
                    id: 2,
                    name: 'Atul Sagotra',
                    email: "atul@gmail.com",
                    phone: "87945-12458"
                },
                {
                    id:3,
                    name:  "Krish Sagotra",
                    email: "krish@gmail.com",
                    phone: "74125-74563"
                },
                {
                    id: 4,
                    name: "Anmol Sagotra",
                    email: "anmol@gmail.com",
                    phone: "55555-74589"
                }  
            ]
        }
        deleteContact = (id) => {
            const {contacts} = this.state;
            const newContacts = contacts.filter(contact =>
                contact.id!== id);
            this.setState({
                contacts: newContacts
            });
        }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact =><Contact 
                key = {contact.id}
                contact = {contact} deleteClickHandler = {this.deleteContact.bind(this,contact.id)}
                // name = {contact.name}
                // email = {contact.email}
                // phone = {contact.phone} 
                />)}
            </React.Fragment>
        )
    }
}
