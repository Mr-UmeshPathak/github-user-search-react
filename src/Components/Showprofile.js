import React, { useState } from "react";
import DisplayProfile from "./DisplayProfile";
function Showprofile() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState({});

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        return response.json();
      })
      .then((originalData) => {
        if (originalData) {
          setData(originalData);
        }
      });
  };
  return (
    <>
      <div className="container my-5">
        <div className="row mt-auto">
          <div className="col-lg-8 col-sm-12 text-center mx-auto">
            <h1 className="h1 mb-3">Search Github User's</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <div className="row mb-5 justify-content-center">
              <form
                className="col-12 justify-content-center"
                id="myform"
                autoComplete="off"
                onSubmit={onSubmitHandler}
              >
                <div className="col-12 my-2 form-group">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Enter Github Username"
                    type={userName}
                    id="w"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="row justify-content-center my-2 form-group">
                  <button className="btn btn-primary btn-block w-25 btn-lg">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <DisplayProfile data={data}></DisplayProfile>
    </>
  );
}

export default Showprofile;
