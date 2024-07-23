import React, { useState,useEffect,useRef} from "react";
import { useDispatchCart, useCart } from './ContextReducer';

export default function Cards(props) { // Ensure the component name starts with an uppercase letter
  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let data=useCart();
  let foodItem = props.item;
  let finalPrice= qty*parseInt(options[size]);
  const priceRef=useRef();
  useEffect(() => {
    setSize(priceRef.current.value)
  }, [])

  const handleAddToCart = async () => {
    if (!props.foodItem || !props.foodItem._id) {
      console.error('foodItem is missing or does not have an _id property');
      return;
    }
  
    if (!Array.isArray(data)) {
      console.error('data is not an array:', data);
      return;
    }
  
    // Find the existing item in the cart
    let existingItem = data.find(item => item.id === props.foodItem._id && item.size === size);
  
    if (existingItem) {
      // Update the quantity of the existing item
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty: qty
      });
    } else {
      // Add a new item to the cart
      await dispatch({
        type: "ADD",
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        qty: qty,
        size: size,
        img: props.ImgSrc
      });
    }
  };
  
  
  
  return (
    <div>
      <div>
        <div className="card my-3" style={{ width: "18rem", maxHeight: "340px" }}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container width=100"></div>
            <select
              className="m-2 bg-success"
              style={{ height: "100%" }}
              onChange={(e) => setQty(e.target.value)}
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
              style={{ height: "100%" }}
              ref={priceRef}
              onChange={(e) => setSize(e.target.value)}
            >
              {priceOptions.map((data) => {
                return <option key={data} value={data}>{data}</option>;
              })}
            </select>
            <div className="d-inline" style={{ height: "100%", fontSize: "fs-5" }}>
              {finalPrice}/-
            </div>
          </div>
          <button className="btn btn-success justify-center w-100px" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
