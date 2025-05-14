import { useState } from 'react';
import './contact.css';

const Contact = () => {
    

    const [name, setName] = useState('')
  const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault();
    setName('')
    setEmail('')
    setMessage('')
  };
    return (
        <div className="page">
            <h1 className="title">Contact Us</h1>
            
            <div className="card">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="group">
                        <label htmlFor="name" className="label">Your Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"  
                            className="input" 
                            placeholder="Enter your name"
                            value = {name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="group">
                        <label htmlFor="email" className="label">Email Address</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email" 
                            className="input" 
                            placeholder="Enter your email"
                            value = {email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="group">
                        <label htmlFor="message" className="label">Your Message</label>
                        <textarea 
                            id="message" 
                            className="textarea"
                            name="message" 
                            placeholder="Write your message here..."
                            rows="6"
                            value = {message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-button">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;