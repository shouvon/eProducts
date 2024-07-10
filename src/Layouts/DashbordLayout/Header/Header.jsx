import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { HeaderBox } from "../Header/Style";

import { useDispatch, useSelector } from "react-redux";
import { authLogout } from "../../../store/AuthSlice";
import { useState } from "react";
import Cart from "../../../Pages/Authorised/Cart/Cart";
import { Badge } from "@mui/material";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const settings = ["Profile", "Logout"];

function Header() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (type) => {
    setAnchorElUser(null);
    if (type === "Logout") {
      console.log("Logout");
      dispatch(authLogout());
    } else {
      console.log("Profile");
      
    }
  };

  const handleCartIconClick = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <HeaderBox>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#191970",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ justifyContent: "space-between", alignItems: "center", minHeight:"64px"}}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.first_name} src={user.profile_pic} />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Link to={setting === "Profile" ? "/profile" : "/"} style={{ textDecoration: "none", color: "inherit" }}>
                      <Typography textAlign="center">{setting}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography variant="h6" component="div" className="logo">
              e-Products
            </Typography>
            <IconButton
              size="large"
              aria-label="show new carts"
              color="inherit"
              onClick={handleCartIconClick}
            >
              <Badge badgeContent={cartItems.length} color="error">
                <FaCartPlus />
                <Cart open={isCartOpen}  onClose={() => setIsCartOpen(false)}/>
              </Badge>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderBox>
  );
}
export default Header;
