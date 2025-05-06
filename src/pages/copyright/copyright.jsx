import './copyright.css';

const CopyRight = () => {
    return (
        <div className="page">
            <div className="card">
                <h1 className="title">Copyright Notice</h1>
                
                <div className="contents">
                    <p>FishingCo&trade;. All rights reserved.</p>
                    
                    <h2>Content Usage</h2>
                    <p>
                        All content on this website, including text, images, graphics, and other materials, 
                        is the property of FishingCo unless otherwise noted.
                    </p>
                    
                    <h2>Permissions</h2>
                    <p>
                        No material from this site may be copied, reproduced, republished, uploaded, posted, 
                        transmitted, or distributed in any way without prior written permission from FishingCo.
                    </p>
                    
                    <h2>Contact</h2>
                    <p>
                        For inquiries regarding the use of our content, please contact us through our 
                        <a href="/contact" className="link"> Contact page</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CopyRight;