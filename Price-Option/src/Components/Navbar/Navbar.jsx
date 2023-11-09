import { HiOutlineMenuAlt1, HiOutlineX } from 'react-icons/hi';
import Link from "../Link/Link";
import { useState } from 'react';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
            {id: 1, name: "Home", path: "/"}, 
            {id: 2, name: "About", path: "/about"}, 
            {id: 3, name: "Products", path: "/products"}, 
            {id: 4, name: "Contact", path: "/contact"}, 
            {id: 5, name: "Services", path: "/services"}
        ];

    return (
        <nav className='bg-yellow-200 p-2'>
            <div className="text-3xl md:hidden cursor-pointer transition ease-in-out" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <HiOutlineX></HiOutlineX> : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
                }
                
            </div>
            <ul className={`md:flex absolute md:static justify-center
             bg-yellow-200 p-4 duration-1000 ${open ? 'top-11' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;