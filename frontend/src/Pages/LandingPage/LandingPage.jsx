import React, { useState, useEffect } from "react";

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1E1E2F",
    minHeight: "100vh",
    color: "#F0F0F0",
  };

  const titleContainerStyle = {
    display: "flex",
    padding: "30px",
    margin: "120px 20px 60px",
    justifyContent: "center",
    alignItems: "center",
    border: "8px solid #00C896",
    backgroundColor: "#2B2B40",
    borderRadius: "20px",
    boxShadow: "0 0 25px rgba(0, 200, 150, 0.3)",
  };

  const titleStyle = {
    fontFamily: "Josefin Sans, sans-serif",
    color: "#00C896",
    fontWeight: 700,
    fontSize: "4.5rem",
    textAlign: "center",
  };

  const sectionHeaderStyle = {
    textAlign: "center",
    color: "#1E1E2F",
    fontFamily: "Oswald",
    backgroundColor: "#00C896",
    width: "100%",
    fontSize: "3rem",
    fontWeight: 700,
    padding: "20px 0",
    marginTop: "100px",
  };

  const descriptionStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.1rem",
    textAlign: "left",
    color: "#EAEAEA",
    maxWidth: "900px",
    margin: "40px",
    lineHeight: "1.7",
  };

  const buttonStyle = {
    backgroundColor: "#00C896",
    color: "#1E1E2F",
    border: "none",
    padding: "14px 32px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
  };

  const textContainer = {
    textAlign: "center",
    alignItems: "center",
    marginBottom: "60px",
  };

  const handleButtonClick = () => {
    console.log("Get Started Clicked!");
  };

  return (
    <div style={containerStyle}>
      <div>
        {/* Removed top/bottom images */}
        <div style={titleContainerStyle}>
          <h1 style={titleStyle}>Skill Swap</h1>
        </div>
      </div>

      {/* Hackathon Info */}
      <h2 style={sectionHeaderStyle}>Hackathon Project Overview</h2>
      <div style={descriptionStyle}>
        <p>
          This platform was built as part of a Hackathon challenge to develop a functional and intuitive solution for
          **skill exchange and collaborative learning**.
        </p>
        <p>
          The project follows a full-stack MERN (MongoDB, Express.js, React.js, Node.js) architecture and enables users
          to list their skills, search for other users, send swap requests, and give ratings post exchange.
        </p>
        <p>
          Features like **Google OAuth Login**, **JWT Security**, **Chat Functionality**, and **Admin Panel** make this
          platform production-ready and scalable.
        </p>
      </div>

      {/* Why Skill Swap */}
      <h2 style={sectionHeaderStyle}>Why Skill Swap?</h2>
      <div id="why-skill-swap" style={textContainer}>
        <div style={descriptionStyle}>
          <p>
            <strong>Skill Swap</strong> is more than just a learning app — it’s a thriving ecosystem of growth,
            knowledge exchange, and real human connection.
          </p>
          <p><strong>➊ Learn From Real Experts:</strong> Get practical, hands-on help from skilled people in real-time.</p>
          <p><strong>➋ Share What You Know:</strong> Become a mentor and grow your network by sharing what you’re best at.</p>
          <p><strong>➌ No Fees, Just Value:</strong> All exchanges are based on skill barter — <em>completely free</em>.</p>
          <p><strong>➍ Diverse Skills:</strong> From web dev to music, there's something for everyone.</p>
          <p><strong>➎ Continuous Growth:</strong> Keep leveling up and helping others do the same.</p>

          <button style={buttonStyle} onClick={handleButtonClick}>
            🚀 Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
