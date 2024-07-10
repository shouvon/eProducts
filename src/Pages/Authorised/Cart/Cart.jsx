import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Typography, Modal, Box, IconButton } from "@mui/material";
import { IoIosCloseCircle } from "react-icons/io";
import CartItems from "./CartItems";

const Cart = ({ open, onClose }) => {
  const productsInCart = useSelector((state) => state.cart.products);

  const handleClose = () => {
    onClose();
  };

  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        onClick={handleContentClick}
        aria-labelledby="cart-modal-title"
        aria-describedby="cart-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ffd700",
          }}
        >
          <Typography variant="h2" id="cart-modal-title" gutterBottom>
            Cart Items
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", top: 8, right: 8, color: "#800020"}}
          >
            <IoIosCloseCircle />
          </IconButton>
          <CartItems products={productsInCart} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Cart;
