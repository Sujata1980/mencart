import React,{useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Cart from './components/Cart';
import toast,{ Toaster} from 'react-hot-toast';
// import { ToastContainer,toast} from 'react-toastify';//for adding toast.warn
import 'react-toastify/dist/ReactToastify.css';//css for toast
import PopUp from './components/PopUp';
import { FaShoppingCart } from "react-icons/fa";

function App() {  
  
  const[cartAllProducts,setCartAllProducts] = useState([])  
  const[showPopup,setShowPopup] = useState(false);

    // const handleAddToCart = (items) =>{
    //   console.log(items);
    //   let isPresent = false;
    //   cartAllProducts.forEach((product)=>{
    //     if (items.id === product.id)
    //       isPresent = true;
    //   })
    //   if (isPresent){
    //     alert("Items is already present");
    //     toast.error("Item is already present");
    //   }else{
        
    //   setCartAllProducts ([...cartAllProducts, items]);
    //   console.log ([...cartAllProducts, items]);
    //   toast.success("Product added successfully");
    //   } 
    // }

    const handleAddToCart = (items) => {
  const exists = cartAllProducts.find(product => product.id === items.id);

  if (!exists) {
    setCartAllProducts([...cartAllProducts, items]);
    toast.success("Product added successfully");     
    
  } else {
    // alert(' This item is already in the cart');
    // setShowPopup(true);
    // setTimeout(()=>{
    //   setShowPopup(false);// Auto close after 2sec.
    // },2000);
    toast('Item is already in cart so we increase quantity by 1',{
          icon: <FaShoppingCart size={30} style={{color:'red'}}/>,
      
    }
    
  );
     const updatedCart = cartAllProducts.map(item =>
      item.id === items.id ? { ...item, Count:item.Count + 1, } : item
      
    );
    setCartAllProducts(updatedCart);
   }
};


  
  return (
    <>
    <Header cartAllProducts={cartAllProducts} />
     {/* {
      showPopup && (<PopUp message="This item is already in your cart"/>)
    }  */}
    {/* <ToastContainer /> */}
    <Routes>
    <Route path='/' element={<Home handleClick={handleAddToCart}/>}/ >
    
    <Route path='/contact' element={<Contact />} />
    <Route path='/about' element={<About />} />
    <Route path='cart/' element={<Cart cartAllProducts={cartAllProducts} setCartAllProducts={setCartAllProducts}/>} />
    </Routes>
    </>
  );
}

export default App;
