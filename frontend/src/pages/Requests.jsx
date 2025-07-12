import React, { useState } from "react";
import "./Requests.css";

const Requests = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      from: "Aman Kumar",
      skill: "Excel",
      status: "pending",
    },
    {
      id: 2,
      from: "Sneha Verma",
      skill: "React",
      status: "accepted",
    },
  ]);

  const acceptRequest = (id) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: "accepted" } : req
      )
    );
  };

  const rejectRequest = (id) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: "rejected" } : req
      )
    );
  };

  const deleteRequest = (id) => {
    setRequests(requests.filter((req) => req.id !== id));
  };

  return (
    <section className="requests-section">
      <h2>Swap Requests</h2>

      {requests.length === 0 ? (
        <p>No requests available.</p>
      ) : (
        <div className="requests-list">
          {requests.map((req) => (
            <div key={req.id} className={`request-card ${req.status}`}>
              <p>
                <strong>{req.from}</strong> requested skill:{" "}
                <strong>{req.skill}</strong>
              </p>
              <p>Status: {req.status}</p>

              {req.status === "pending" && (
                <div className="actions">
                  <button onClick={() => acceptRequest(req.id)} className="accept">
                    Accept
                  </button>
                  <button onClick={() => rejectRequest(req.id)} className="reject">
                    Reject
                  </button>
                </div>
              )}
              <button onClick={() => deleteRequest(req.id)} className="delete">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Requests;
