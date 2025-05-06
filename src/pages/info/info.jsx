import './info.css';

const Info = () => {
    return (
        <div className="page">
            <h1 className="title">About Our Info</h1>
            
            <div className="card">
                <div className="info-content">
                    <p className="text">
                        At FishingCo, we gather our knowledge from a blend of expert insights, 
                        first-hand experiences, and some of the best fishing books around.
                    </p>
                    
                    <p className="subtitle">Our primary sources include:</p>
                    
                    <ul className="info-sources">
                        <li className="item"> 
                            <span>The Ultimate Guide to Coastal Fishing by James Carter</span>
                        </li>
                        <li className="item">
                            <span>Freshwater Adventures by Emily Woods</span>
                        </li>
                        <li className="item">
                            <span>Fishing Beyond the Shores by Luke Rivers</span>
                        </li>
                    </ul>
                    
                    <div className="highlight">
                        In addition to our literary resources, our team's adventures across lakes, 
                        rivers, and coastal waters bring real-world expertise to every guide and tip we share.
                    </div>
                    
                    <p className="info-text">
                        From hidden fishing spots to seasonal tricks, we've ventured far and wide to help you catch more. 
                        Let us guide you to the best fishing locations, whether it's the tranquil mountain streams 
                        or the vast open sea.
                    </p>
                    
                    <div className="signature">
                        <div className="signature-line"></div>
                        <p className="signature-text">The FishingCo Team</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;