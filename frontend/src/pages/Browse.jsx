// import React from "react";

// const Home = () => {
//   return (
//     <section className="home">
//       <h2>Welcome to SkillSwap</h2>
//       <p>This is the browsing page.</p>
//     </section>
//   );
// };

// export default Home;
import React from "react";
import "./Browse.css";

const sampleUsers = [
  {
    id: 1,
    name: "Aman Kumar",
    location: "Delhi",
    skillsOffered: ["Graphic Design", "Figma"],
    availability: "Weekends",
  },
  {
    id: 2,
    name: "Sneha Verma",
    location: "Bangalore",
    skillsOffered: ["Excel", "Photoshop"],
    availability: "Weekday Evenings",
  },
  {
    id: 3,
    name: "Ravi Sharma",
    location: "Mumbai",
    skillsOffered: ["Java", "React"],
    availability: "Flexible",
  },
   {
    id: 4,
    name: "Shashwat Pandey",
    location: "Varanasi",
    skillsOffered: ["Web Developer"],
    availability: "Flexible",
  },
];

const Browse = () => {
  return (
    <section className="browse-section">
      <h2>Browse Skill Profiles</h2>
      <div className="card-container">
        {sampleUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <h3>{user.name}</h3>
            <p><strong>Location:</strong> {user.location}</p>
            <p><strong>Skills Offered:</strong> {user.skillsOffered.join(", ")}</p>
            <p><strong>Availability:</strong> {user.availability}</p>
            <button className="request-btn">Request Swap</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Browse;
