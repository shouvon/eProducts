import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Typography, Button, Box } from "@mui/material";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { removeCartItem } from "../../../reducers/CartSlice";
import { Link } from "react-router-dom";

const CartItems = ({ products }) => {
  const [cartProducts, setCartProducts] = useState(products);
  const dispatch = useDispatch();

  const handleRemoveItem = (index, productId) => {
    dispatch(removeCartItem(productId)); 
    const updatedProducts = [...cartProducts];
    updatedProducts.splice(index, 1);
    setCartProducts(updatedProducts);
  };

  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <Box>
      {cartProducts.map((product, index) => (
        <li key={index}>
          <Typography variant="body4" style={{fontSize: '12px', padding:"6px"}}>{product.title},</Typography>
          <Typography variant="body4">Price: ${product.price}</Typography>
          <Button onClick={() => handleRemoveItem(index, product.id)}> 
            <IoIosRemoveCircleOutline style={{ color: "#800020" }} />
          </Button>
        </li>
      ))}

      <Box mt={2}>
        <Typography variant="body4" style={{fontSize: '15px'}}>
          <strong>Total Price:</strong> ${totalPrice}
        </Typography>
      </Box>
      <Box mt={2}>
        <Link to={'/buynow'}>
        <Button variant="contained"  style={{ backgroundColor: "#800020" }}>
          Order Now
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CartItems;
