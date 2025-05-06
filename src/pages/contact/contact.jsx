import './contact.css';

const Contact = () => {
    return (
        <div className="page">
            <h1 className="title">Contact Us</h1>
            
            <div className="card">
                <form className="form">
                    <div className="group">
                        <label htmlFor="name" className="label">Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="input" 
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    
                    <div className="group">
                        <label htmlFor="email" className="label">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="input" 
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    
                    <div className="group">
                        <label htmlFor="message" className="label">Your Message</label>
                        <textarea 
                            id="message" 
                            className="textarea" 
                            placeholder="Write your message here..."
                            rows="6"
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