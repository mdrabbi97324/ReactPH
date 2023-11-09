import PropTypes from 'prop-types';
import {HiCheckCircle } from 'react-icons/hi';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-700 text-white p-10 rounded flex flex-col">
                <h2 className="text-center">
                <span className="text-7xl font-bold">{price}</span>
                <span className="text-3xl font-medium">/mon</span>
                </h2>
                <h4 className="text-3xl text-center my-6">{name}</h4>
                
                    <div className='flex-grow'>
                        {
                            features.map((feature, index) => <p className='flex items-center gap-2' key={index}>
                                <HiCheckCircle className='text-green-500'>
                                </HiCheckCircle>{feature}</p>)
                        }
                    </div>

                <button className='outline-none w-full my-10 bg-green-600 hover:bg-green-800 rounded-lg py-2 font-semibold'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;