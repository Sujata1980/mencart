import { useEffect, useState } from "react";
import "./Cart.css";
import { RxCross2 } from "react-icons/rx";

import toast, { Toaster } from "react-hot-toast";
import DeletePopup from "./DeletePopup";
  

const Cart = ({ cartAllProducts, setCartAllProducts }) => {
  console.log("filteredProducts", cartAllProducts);

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  

  const handlePrice = () => {
    let ans = 0;
    cartAllProducts.map(
      (item) =>
        // ans = ans + item.Price*item.Count
        (ans += item.Price * item.Count)
    );
    setPrice(ans);
  };

  const handleQuantity = () => {
    let quantity = 0;
    cartAllProducts.map((items) => (quantity = quantity + items.Count));
    setQuantity(quantity);
  };

  useEffect(() => {
    handlePrice();
    handleQuantity();
  });

  const handleIncrement = (ID) => {
    const updatedCart = cartAllProducts.map((item) =>
      item.id === ID ? { ...item, Count: item.Count + 1 } : item
    );
    setCartAllProducts(updatedCart);
  };

  const handleDecrement = (items) => {
    if (items.Count > 1) {
      setCartAllProducts((preItem) =>
        preItem.map((product) =>
          product.id === items.id
            ? { ...product, Count: product.Count - 1 }
            : product
        )
      );
    } else {
      toast.error("This didn't work you can delete item through X sign.");
      
    }

    //         setCartAllProducts((preItem) => {
    //           const updatedItems = [];
    //           for (let i = 0; i < preItem.length; i++) {
    //             const product = preItem[i];
    //             if (product.id === ID) {
    //               if(product.Count > 1){
    //                 updatedItems.push({ ...product, Count: product.Count - 1 });
    //               }

    //               else{
    //                 toast.error("This didn't work.")
    // ;
    //               }
    //             } else {
    //               updatedItems.push(product);
    //             }
    //           }
    //           return updatedItems;
    //         });
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      const filteredProducts = cartAllProducts.filter(
        (mensDreeses) => mensDreeses.id !== index
      );
      setCartAllProducts(filteredProducts);
    }
  };

  
     


  return (
    <>
      <Toaster />
      <h1 style={{ marginLeft: "40px" }}>Selected Items</h1>
      <div className="container">
        <div className="cart-container">
          {cartAllProducts.map((items) => {
            return (
              <div className="cart-items">
                <div className="cart-content">
                  <img src={items.image} alt="dreeses" className="cart-image" />
                  <div className="cart-content1">
                    <div className="cart-content2">
                      <p>{items.description}</p>
                      <p>{items.Fabric}</p>
                      <p>Rs.-{items.Price}/-</p>
                      <p>Total Cost : Rs. {items.Price * items.Count}/-</p>
                    </div>
                    <div className="cart-content3">
                      <button
                        className="btn2"
                        onClick={() => handleIncrement(items.id)}
                      >
                        +
                      </button>
                      <p>{items.Count}</p>
                      <button
                        className="btn2"
                        onClick={() => handleDecrement(items)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <RxCross2
                    onClick={()=>handleDelete(items.id)} 
                    className="delete-icon"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="price-detail">
          <p>Price Details</p>

          <p>Total Item : {quantity}</p>
          <p>Total Amount: Rs.{price}/-</p>
          <button>Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
