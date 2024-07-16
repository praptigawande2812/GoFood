import React from "react";

export default function cards() {
  return (
    <div>
      <div>
        <div
          className="card"
          style={{ width: "18rem", maxheight: "340px" }}
        >
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">this is text</p>
            <div className="container width=100"></div>
            <select
              className="m-2 bg-success"
              style={{
                height: "100%",
              }}
            >
              {Array.from(Array(6), (o, index) => {
                return (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 bg-success"
              style={{
                height: "100%",
              }}
            >
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div
              className="d-inline"
              style={{
                height: "100%",
                fontSize: "fs-5",
              }}
            >
              Total Price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
