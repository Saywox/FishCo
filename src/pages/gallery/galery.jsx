import './gallery.css';

const Gallery = () => {
    const fishData = [
        {
            id: 1,
            name: "Rainbow Trout",
            image: "https://assets.wired2fish.com/uploads/2023/09/rainbow-trout.webp",
            origin: "Native to North America, now found worldwide",
            bait: "Best caught with worms, powerbait, or small spinners"
        },
        {
            id: 2,
            name: "Largemouth Bass",
            image: "https://assets.wired2fish.com/uploads/2023/01/largemouth-bass-species-guide-5.jpg",
            origin: "Native to eastern and central North America",
            bait: "Top baits: plastic worms, crankbaits, and live minnows"
        },
        {
            id: 3,
            name: "Atlantic Salmon",
            image: "https://oceana.org/wp-content/uploads/sites/18/noaa_atlantic_salmon.jpg",
            origin: "North Atlantic Ocean and rivers flowing into it",
            bait: "Try flies, spoons, or worms in deeper pools"
        },
        {
            id: 4,
            name: "Bluegill",
            image: "https://s.hdnux.com/photos/01/37/63/43/25114864/5/ratio3x2_1920.jpg",
            origin: "Throughout North America",
            bait: "Great with small hooks and worms or crickets"
        },
        {
            id: 5,
            name: "Northern Pike",
            image: "https://assets.wired2fish.com/uploads/2023/06/northern-pike-underwater.webp",
            origin: "Freshwaters of northern hemisphere",
            bait: "Use large spoons, spinnerbaits, or live baitfish"
        },
        {
            id: 6,
            name: "Walleye",
            image: "https://nas.er.usgs.gov/XIMAGESERVERX/2019/20190815083759.jpg",
            origin: "Native to Canada and northern United States",
            bait: "Jigs with minnows or nightcrawlers work best"
        }
    ];

    return (
        <div className="gallery-page">
            <h1 className="title">FishingCo Gallery</h1>
            
            <div className="cards">
                {fishData.map(fish => (
                    <div key={fish.id} className="fish-card">
                        <img 
                            className="fish-image" 
                            src={fish.image} 
                            alt={fish.name}
                        />
                        <div className="fish-info">
                            <h3 className="fish-name">{fish.name}</h3>
                            <div className="fish-details">
                                <p>📍 {fish.origin}</p>
                                <p>🎣 {fish.bait}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;