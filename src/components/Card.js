import React from "react";

export default function cards() {
  return (
    <div>
      <div>
        <div
          className="card mt=3"
          style={{ width: "18rem", maxheight: "340px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
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
