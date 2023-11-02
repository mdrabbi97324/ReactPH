import './Bottle.css'
const Bottle = ({bottle, handlePurchase}) => {
    const {name, price, img} = bottle;
    
    return (
        <div className="bottle">
            <h3>Bottle Name : {name}</h3>
            <p>Price : ${price}</p>
            <img src={img} alt="" />
            <div>
                <button onClick={() => handlePurchase(bottle)}>Purchase</button>
            </div>
        </div>
    );
};

export default Bottle;