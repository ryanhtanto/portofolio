import React from "react";
import useInput from "../hooks/useInput";
import { addContact } from "../utils/saveContact";
import Swal from 'sweetalert2';

function Contact () {
        const [name, setName] = useInput('');
        const [email, setEmail] =  useInput('');
        const [message, setMessage] =  useInput('');
        const [confirmation, setConfirmation] =  React.useState('');
        const onSubmit = async (event) => {
                event.preventDefault();
                const addingContact = await addContact({name, email, message})
                setConfirmation('Check your email for confirmation!')
                if(addingContact.success){
                        Swal.fire({
                                title: 'Submmitted',
                                showConfirmButton: false,
                                timer: 2000,
                        });
                }else{
                        Swal.fire({
                                icon: 'error',
                                title: 'You put the wrong information',
                                showConfirmButton: false,
                                timer: 2000,
                        });
                }
        }
        return (
                <div className="container skills" id="contact">
                        <h3 className="fw-bold box-area mt-5">Contact</h3>
                        <form onSubmit={onSubmit} className="col-lg-11">
                                <div className="form-group">
                                                <label htmlFor="name" className="fw-bold">Name<span style={{color: 'red'}}>*</span></label>
                                                <input type="text" className="form-control mt-2 mb-2" id="name" placeholder="Enter your name" value={name} onChange={setName} required/>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="email" className="fw-bold">Email<span style={{color: 'red'}}>*</span></label>
                                        <input row="5" type="name" className="form-control mt-2 mb-2" id="email" placeholder="Enter your email" value={email} onChange={setEmail} required/>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="message" className="fw-bold">Message<span style={{color: 'red'}}>*</span></label>
                                        <textarea row="5" className="form-control mt-2 mb-2" id="message" placeholder="Anything I can help? Let me know" value={message} onChange={setMessage} required/>
                                </div>
                                <p className="fw-bold confirmation">{confirmation}</p>
                                <button type="submit" className="mb-2 p-2 px-5 fw-bold">Send</button>
                                
                        </form>
                </div>
        )
}

export default Contact;