import React,{ useState} from 'react'
import './Home.css'

import productList from './Data';
import toast,{Toaster} from 'react-hot-toast';

const Home = ({handleClick}) => {
  
const[product,setProduct] = useState(productList);

// const handleAddToCart = (ID) =>{
//     // alert(ID);
//     setProductId(ID);
//     toast.success("Product added successfully"); /*npm i react-hot-toast*/
// }
  return (
    <div className='container1'>
      <Toaster />
    {product.map((items)=>{
        return(
            
            <div className='item-container' key={items.id}>
           <p><img src={items.image} alt='men clothing' height={300}/></p>
           <h2>{items.description}</h2>
           <p>{items.Fabric}</p>
           <p>Rs.-{items.Price}/-</p> 
            <button className='btn' onClick={()=>handleClick(items)}>Add To Cart </button>            
            </div>
           
 
        )
        
    })}
      
    </div>
  )
}

export default Home;
