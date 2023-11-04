import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='md: flex justify-between items-center p-4 border-b-2'>
            <h1 className='text-4xl font-bold'>Knowledge cafe</h1>
            <img src={Profile} alt="" />
        </header>
    );
};

export default Header;