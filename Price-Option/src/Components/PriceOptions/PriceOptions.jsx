import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions =  [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to gym facilities",
              "Standard equipment usage",
              "Locker room access",
              "Personalized workout plan",
              "24/7 access to the gym"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
              "Access to gym facilities",
              "Premium equipment usage",
              "Locker room access",
              "Unlimited group fitness classes",
              "Nutritional counseling",
              "Access to sauna and steam room"
            ]
          },
          {
            "id": 3,
            "name": "Family Membership",
            "price": 89.99,
            "features": [
              "Access to gym facilities for the whole family",
              "Standard equipment usage",
              "Locker room access",
              "Childcare services",
              "Access to swimming pool",
              "Discounts on personal training sessions"
            ]
          }
        ]
      
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl text-center mt-5">Best Prices in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 m-12">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;