import React, { useState } from "react";

function ModalItem({ data, setData }) {
  const [modal, setModal] = useState(false);
  const [newItem, setNewItem] = useState({
    id: Math.random(),
    img: "",
    firstName: "",
    lostName: "",
    age: "",
    from: "",
    job: "",
    gender: "",
  });

  function escape() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setModal(false);
      }
    });
  }
  escape();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newItem.age.length > 0 &&
      newItem.firstName.length > 0 &&
      newItem.lostName.length > 0 &&
      newItem.from.length > 0 &&
      newItem.job.length > 0 &&
      newItem.img.length > 0 &&
      newItem.gender.length > 0
    ) {
      setModal(false);
      setData([...data, newItem]);
    }
  };

  return (
    <>
      {modal && (
        <div className="modal-wrapper">
          <div
            className="overlay"
            onClick={() => {
              setModal(false);
            }}
          >
            <div
              className="modal"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <h2>Create New User</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  <span>Image URL:</span>
                  <input
                    onChange={(e) => {
                      setNewItem({ ...newItem, img: e.target.value });
                    }}
                    type="url"
                    required=""
                  />
                </label>
                <label>
                  <span>First Name:</span>
                  <input
                    onChange={(e) => {
                      setNewItem({ ...newItem, firstName: e.target.value });
                    }}
                    type="text"
                    required=""
                  />
                </label>
                <label>
                  <span>Last Name:</span>
                  <input
                    onChange={(e) => {
                      setNewItem({ ...newItem, lostName: e.target.value });
                    }}
                    type="text"
                    required=""
                  />
                </label>
                <label>
                  <span>Age:</span>
                  <input
                    onChange={(e) => {
                      setNewItem({ ...newItem, age: e.target.value });
                    }}
                    type="number"
                    required=""
                  />
                </label>
                <label>
                  <span>From:</span>
                  <input
                    onChange={(e) => {
                      setNewItem({ ...newItem, from: e.target.value });
                    }}
                    type="text"
                    required=""
                  />
                </label>
                <label>
                  <span>Job:</span>
                  <input
                    onChange={(e) => {
                      setNewItem({ ...newItem, job: e.target.value });
                    }}
                    type="text"
                    required=""
                  />
                </label>
                <div className="gender">
                  <span>Gender:</span>
                  <label>
                    <small>Male</small>
                    <input
                      type="radio"
                      required=""
                      name="gender"
                      onChange={(e) => {
                        setNewItem({ ...newItem, gender: e.target.value });
                      }}
                      defaultValue="male"
                    />
                  </label>
                  <label>
                    <small>Female</small>
                    <input
                      type="radio"
                      required=""
                      name="gender"
                      onChange={(e) => {
                        setNewItem({ ...newItem, gender: e.target.value });
                      }}
                      defaultValue="female"
                    />
                  </label>
                </div>
                <button className="modal-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          setModal(true);
        }}
        className="create-user"
      >
        Create User
      </button>
    </>
  );
}

export default ModalItem;
