import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Purchase item count : {cart.length}</h4>
            {cart.map((bottle) => <div className="cart-container" key={bottle.key}>
                    <img src={bottle.img}></img>
                    <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)}
        </div>
    );
};

export default Cart;