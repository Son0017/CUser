import React from "react";

function ListUser({ data, setData }) {
  function deleteItem(id) {
    let newArray = data.filter((item) => item.id !== id);
    setData(newArray);
  }
  return (
    <div className="userList">
      <div className="userList-container container">
        {data.length > 0 &&
          data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <div className="card-inner">
                  <img src={item.img} width={150} height={150} />
                  <h3>
                    {item.firstName} {item.lostName}, {item.age} age.
                  </h3>
                  <p>From: {item.from}</p>
                  <p>Job: {item.job}</p>
                  <p>Gender: {item.gender}</p>
                  <button
                    onClick={() => {
                      deleteItem(item.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListUser;
