
import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [isPublic, setIsPublic] = useState(true);

  return (
    <section className="profile-section">
      <h2>Edit Your Profile</h2>

      <form className="profile-form">
        <label>
          Name:
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Location (optional):
          <input type="text" placeholder="Your city or country" />
        </label>

        <label>
          Profile Photo (optional):
          <input type="file" accept="image/*" />
        </label>

        <label>
          Skills You Offer:
          <input type="text" placeholder="e.g. Photoshop, Java" required />
        </label>

        <label>
          Skills You Want:
          <input type="text" placeholder="e.g. Excel, Video Editing" required />
        </label>

        <label>
          Availability:
          <select>
            <option>Weekends</option>
            <option>Weekdays Evenings</option>
            <option>Flexible</option>
          </select>
        </label>

        <label className="privacy-toggle">
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          Make Profile Public
        </label>

        <button type="submit">Save Profile</button>
      </form>
    </section>
  );
};

export default Profile;
