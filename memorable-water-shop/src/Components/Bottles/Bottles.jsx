import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../utils/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    }, [])

    // load Cart from local storage
    useEffect(() => {
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            const saveCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart);
        }
    },[bottles])

    const handlePurchase = (bottle) => {
        const newCartItem = [...cart, bottle];
        setCart(newCartItem);
        addToLS(bottle.id)
    }
    const handleRemoveFromCart = (id) => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }
    return (
        <div>
            <h3>Bottle Available : {bottles.length}</h3>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>            
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle 
                        key= {bottle.id} 
                        handlePurchase={handlePurchase} 
                        bottle={bottle}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;