import React, {Component} from 'react'
const Context = React.createContext();
const reducer = (state, action) =>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload)
            }
            case 'ADD_CONTACT':
                return{
                    ...state,
                    contacts: [action.payload,
                    ...state.contacts]
                }
            default:
                return state;
    }
}
export class Provider extends Component{
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
        ],
        dispatch : action => {
            this.setState(state => reducer(state, action))
        }   
     }
    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;