

import './rules.css';

const Rules = () => {
    return (
        <div className="page">
            <h1 className="title">Community Rules</h1>
            
            <div className="containers">
                <div className="rules-list">
                    <div className="rule-item">
                        <h3 className="rule-title">1. No spam</h3>
                        <p className="rule-content">
                            Do not spam in the "Contact" tab! Only ask your question once and I will eventually answer you.
                        </p>
                    </div>
                    
                    <div className="rule-item">
                        <h3 className="rule-title">2. Stay On-Topic</h3>
                        <p className="rule-content">
                            Do not ask me questions that are not related to my hobby or my personal life. Be respectful.
                        </p>
                    </div>
                    
                    <div className="rule-item">
                        <h3 className="rule-title">3. No Self-Promotion</h3>
                        <p className="rule-content">
                            If you contact me to promote your gear or product I will decline. This blog is for me and my hobby!
                        </p>
                    </div>
                    
                    <div className="rule-item">
                        <h3 className="rule-title">4. Protect Privacy</h3>
                        <p className="rule-content">
                            Do not share personal information about yourself or others. This includes phone numbers, 
                            addresses, or any confidential details. Respecting privacy!
                        </p>
                    </div>
                    
                    <div className="rule-item">
                        <h3 className="rule-title">5. Follow the Rules</h3>
                        <p className="rule-content">
                            Each blog or forum has its own set of rules. Make sure to read and adhere to them! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rules;
