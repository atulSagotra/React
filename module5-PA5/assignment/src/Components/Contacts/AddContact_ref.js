import React, { Component } from 'react'

class AddContact extends Component {
    constructor(props){
        super(props)
            this.nameInput = React.createRef();
            this.emailInput = React.createRef();
            this.phoneInput = React.createRef();
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value
        }
        console.log(contact)
    };
    static defaultProps = {
        name: 'Atul Sagotra',
        email: 'atulsagotra@gmail.com',
        phone: '78945-74125'
    };
    

    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit = { this.onSubmit }>
                        <div className="form-group text-left">
                            <label htmlFor="name" >Name</label>
                            <input type="text" name = "name" className="form-control formcontrol-lg"
                            placeholder="Enter Name.."
                            defaultValue = {name}
                            ref = {this.nameInput}
                            
                            />
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="email" >Email</label>
                            <input type="email" name = "email"
                            className="form-control formcontrol-lg" 
                            placeholder="Enter Email.."
                            defaultValue = {email}
                            ref = {this.emailInput}
                            
                            />                            
                        </div>
                        <div className="form-group text-left">
                            <label htmlFor="phone" >Phone</label>
                            <input type="text" name = "phone" className="form-control formcontrol-lg" placeholder="Enter Phone.."
                            defaultValue = {phone}
                            ref = {this.phoneInput}
                            
                            />
                        </div>
                        <input type="submit" value="Add Contact" className= "btn btn-light btn-black" />
                    </form>
                </div>
            </div>
        )
    }
}
export default AddContact;
