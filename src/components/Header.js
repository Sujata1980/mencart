import React,{useState,useEffect} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './Header.css'
import { NavLink } from 'react-router-dom';


const Header = ({cartAllProducts}) => {

  const[quantity,setQuantity] = useState(0);

  const handleQuantity = () => {
      let quantity = 0;
      cartAllProducts.map((items) => (quantity = quantity + items.Count));
      setQuantity(quantity);
    };
  
    useEffect(() => {
      
      handleQuantity();
    });

  return (
    
      <nav className='nav'>
        <ul className='navBar'>
          <li><NavLink to='/' className='active-Link'>HOME</NavLink></li>
          <li><NavLink to='about' className='active-Link'>ABOUT US</NavLink></li>
          <li><NavLink to='contact' className='active-Link'>CONTACT</NavLink></li>
                    
        </ul>
        <ul className='cart1'>
          <li><NavLink to='cart'><FaShoppingCart size={35} style={{marginRight:'20',color:'aliceblue'}}/></NavLink></li>
          <span className='cart-num'>{quantity}</span>
        </ul>
      </nav>
        
  )
}

export default Header;
