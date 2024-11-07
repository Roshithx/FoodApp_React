import {React,useState} from 'react';
import { LOGO_URL } from '../Utils/Contants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Utils/useOnlineStatus';

const Header = () => {
 
  const [loginBtn,setLoginBtn]=useState("Login")
  const onlineStatus = useOnlineStatus()

  return (
    <header className='flex justify-between items-center p-4 border-b border-gray-200 bg-white'>
      {/* Logo */}
      <div>
        <img width={120} src={LOGO_URL} alt="Company Logo" className="opacity-90" />
      </div>

      {/* Navigation */}
      <nav className='hidden md:flex flex-1 justify-end me-8 gap-6 text-gray-600'>
     
        <Link to={'/'} className="hover:underline hover:text-gray-800 transition-all">Home</Link>
        <Link to={'/about'} className="hover:underline hover:text-gray-800 transition-all">About</Link>
        <Link to={'/contact'} className="hover:underline hover:text-gray-800 transition-all">Contact</Link>
      </nav>

      {/* Cart and Login */}
      <div className='flex items-center gap-5'>
        {/* Cart Icon with Simple Counter */}
        <div className="relative cursor-pointer">
          <i className="fa-solid fa-cart-shopping text-lg text-gray-600 hover:text-gray-800 transition-colors"></i>
          <span className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-medium px-1 rounded-full">3</span>
        </div>

        <p>
            {
               onlineStatus?<span><i className=" text-green-700 fa-solid fa-circle"></i> Online</span> : <span><i className="text-red-600 fa-solid fa-circle"></i> Offline</span>
            }
         </p>

        {/* Minimal Login Button */}
        <button onClick={()=>{
          loginBtn==="Login"?
          setLoginBtn("Logout")
          :
          setLoginBtn("Login")
         }}
           className='px-4 py-2 border border-gray-300 text-white bg-black font-medium rounded'>
          {loginBtn}
        </button>
      </div>
    </header>
  );
}

export default Header;
