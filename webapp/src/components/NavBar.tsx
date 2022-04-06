import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Logo from '../images/logo.png';
import React, { useState } from 'react';
import {SharedProduct} from '../shared/shareddtypes';
import { Drawer } from "@mui/material";
import Cart from './Cart';

type Props= {
  cartItems:SharedProduct[];
  handleAddToCart: (clikedItem: SharedProduct) => void;
  handleRemoveFromCart: (id: number) => void;
}

const NavBar:React.FC<Props>= ({cartItems,handleAddToCart,handleRemoveFromCart}) => {
  const [cartOpen,setCartOpen] = useState(false);
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id="bar">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={Logo} alt="logo" id="logo"/>
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            DeDe
          </Typography>
          
          <Button href="http://localhost:3000/" color="inherit">Home</Button>
          <Button href="http://localhost:3000/products" color="inherit">Products</Button>
          <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          <Cart 
          cartItems={cartItems}
           addToCart={handleAddToCart} 
           removeFromCart={handleRemoveFromCart}
           />
          </Drawer>
          <Button onClick={() => setCartOpen(true)} color="inherit">Shopping Cart</Button>
          <Button href="http://localhost:3000/history" color="inherit">History</Button>
          <Button href="http://localhost:3000/login" color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  ); 
}

export default NavBar;
