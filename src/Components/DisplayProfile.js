import React from "react";

function DisplayProfile({ data }) {
  return (
    <div className="container">
      <div className="card p-3">
        <div className="d-flex align-items-center">
          <div className="image me-4">
            <img src={data.avatar_url} className="rounded" width="155" />
          </div>
          <div className="p-2 ml-3 w-100">
            <h4 className="mb-0 mt-0">{data.login}</h4>
            <span>{data.bio}</span>
            <div className="p-3 mt-2 bg-info text-dark row d-flex justify-content-start rounded stats">
              <div className="d-flex flex-column col-4 fw-bold">
                {" "}
                <span className="articles">Repo</span>{" "}
                <span className="number1">{data.public_repos}</span>{" "}
              </div>
              <div className="d-flex flex-column col-4 fw-bold">
                {" "}
                <span className="followers">Followers</span>{" "}
                <span className="number2">{data.followers}</span>{" "}
              </div>
              <div className="d-flex flex-column col-4 fw-bold">
                {" "}
                <span className="rating">following</span>{" "}
                <span className="number3">{data.following}</span>{" "}
              </div>
              <div className="d-flex flex-column col-4 fw-bold">
                {" "}
                <span className="location">Location</span>{" "}
                <span className="number3">{data.location}</span>{" "}
              </div>
              <div className="d-flex flex-column col-4 fw-bold">
                {" "}
                <span className="twitterUsername">Twitter</span>{" "}
                <span className="number3">{data.twitter_username}</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProfile; 
