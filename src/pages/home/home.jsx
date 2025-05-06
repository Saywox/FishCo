
import './home.css';

const Home = () => {
    return (
        <div className="page">
            <h1 className="title">Welcome to FishingCo&trade;.</h1>

            <div className="content">
                <p className="text">
                    Welcome to FishingCo&trade; – your go-to hub for everything fishing!
                    <br /><br />
                    Whether you're a seasoned angler or just starting out, FishingCo&trade; offers expert tips,
                    gear guides, and fascinating information about all kinds of fish.
                    <br /><br />
                    Check back every fortnight for fresh updates, new fishing spots,
                    and featured fish facts to keep your lines tight and your knowledge sharp.
                </p>

                <div className="image1">
                    <img
                        className="image2"
                        src="https://img.freepik.com/free-vector/cute-fish-fishing-cartoon-vector-icon-illustration-animal-sport-icon-concept-isolated-premium-flat_138676-4566.jpg?semt=ais_hybrid&w=740"
                        alt="Mascot"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;