
import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
const Cart = () => {
    const [cartItems , setCart] = useState([])
    useEffect(() =>
    {
        fetch('http://localhost:8000/Cartblogs')
            .then(res => {
             return res.json()
            })
            .then(data => {
            //  console.log(data)
             setCart(data)
            })
    },[]);
    
    if(cartItems)
    {console.log(cartItems)}

    return ( <div className="main">
        { cartItems && < Bloglist blogs={cartItems} title="all the blogs" />
            }
        
    </div> );
}
 
export default Cart;