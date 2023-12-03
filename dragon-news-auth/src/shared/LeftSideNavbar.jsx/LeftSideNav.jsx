import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-xl font-semibold">All Category {categories.length}</h2>

            {
                categories.map(category => <Link 
                    key={category.id}
                    className="block px-12 pt-7 text-xl font-medium text-[#9F9F9F]"
                    >{category.name}</Link>)
            }

        </div>
    );
};

export default LeftSideNav;