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
    backgroundColor: "#ffffff", // white background
    minHeight: "100vh",
    color: "#1E1E2F",
  };

  const titleContainerStyle = {
    display: "flex",
    padding: "30px 60px",
    margin: "120px 20px 60px",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #854a68ff",
    backgroundColor: "#fdf7fb",
    borderRadius: "20px",
    boxShadow: "0 0 30px rgba(133, 74, 104, 0.3)",
  };

  const titleStyle = {
    fontFamily: "Josefin Sans, sans-serif",
    color: "#854a68ff",
    fontWeight: 800,
    fontSize: "4.5rem",
    textAlign: "center",
  };

  const sectionHeaderStyle = {
    textAlign: "center",
    color: "#ffffff",
    fontFamily: "Oswald",
    backgroundColor: "#854a68ff",
    width: "100%",
    fontSize: "2.7rem",
    fontWeight: 700,
    padding: "20px 0",
    marginTop: "80px",
  };

  const descriptionStyle = {
    fontFamily: "Montserrat, sans-serif",
    fontSize: "1.15rem",
    textAlign: "left",
    color: "#333333",
    maxWidth: "900px",
    margin: "40px",
    lineHeight: "1.75",
  };

  const buttonStyle = {
    backgroundColor: "#854a68ff",
    color: "#ffffff",
    border: "none",
    padding: "14px 32px",
    fontSize: "1.1rem",
    fontWeight: "600",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "20px",
    boxShadow: "0px 4px 14px rgba(133, 74, 104, 0.3)",
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
      {/* Logo Box */}
      <div>
        <div style={titleContainerStyle}>
          <h1 style={titleStyle}>Skill Swap</h1>
        </div>
      </div>

      {/* Hackathon Info */}
      <h2 style={sectionHeaderStyle}>Hackathon Project Overview</h2>
      <div style={descriptionStyle}>
        <p>
          <strong>SkillSwap</strong> is a full-stack Hackathon project designed to create a skill-sharing ecosystem
          that empowers people to exchange talents, connect meaningfully, and grow together.
        </p>
        <p>
          Built using the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), it features Google OAuth, JWT security, 
          real-time chat, admin panel, and responsive UI.
        </p>
        <p>
          This solution reimagines collaborative learning by enabling peer-to-peer knowledge sharing—free, accessible,
          and beautifully designed.
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

