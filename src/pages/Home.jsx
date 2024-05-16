import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">Mega Marketing</h1>
        <p className="hero-text">
          We are a team of passionate and experienced professionals who are
          dedicated to helping businesses grow and succeed in the market.
        </p>
        <div className="shapes">
          <img
            src="../images/big-blue-filled.png"
            alt="shape1"
            className="box1"
          />
        </div>
        <button className="home-btn">Get Started</button>
      </div>
      <div className="home-services">
        <h1>About</h1>
      </div>
      <div className="home-mission">
        <h1>Services</h1>
      </div>
      <div className="statment">
        <h1>Statments and customers</h1>
      </div>
    </div>
  );
};

export default Home;
