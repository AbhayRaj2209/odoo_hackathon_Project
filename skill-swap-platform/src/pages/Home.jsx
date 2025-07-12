// import React from "react";

// const Home = () => {
//   return (
//     <section className="home">
//       <h2>Welcome to SkillSwap</h2>
//       <p>This is the home page.</p>
//     </section>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-section">
      <div className="hero">
        <h2>Discover & Exchange Skills</h2>
        <p>Offer your talents and learn from others. A true skill-sharing network built by the community.</p>
        <Link to="/browse" className="cta-button">Browse Skills</Link>
      </div>

      <div className="features">
        <div className="feature-box">
          <h3>Create Profile</h3>
          <p>Show your skills, set your availability, and make your profile public or private.</p>
        </div>
        <div className="feature-box">
          <h3>Request Swap</h3>
          <p>Send requests, accept or reject, and start learning or teaching instantly.</p>
        </div>
        <div className="feature-box">
          <h3>Rate & Improve</h3>
          <p>Rate users after each exchange to build trust and improve experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
