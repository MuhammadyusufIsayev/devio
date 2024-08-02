import PropTypes from 'prop-types';
import logo from '../../assets/icons/logo.svg';
import { FaInstagram, FaFacebookF, FaTimes } from "react-icons/fa";

const Sitebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed z-10 top-0 left-0 w-[100%] md:w-[15%] h-full p-8 flex flex-col justify-between font-montserrat bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-1/2 md:w-full" />
        <button className="md:hidden" onClick={toggleSidebar}>
          <FaTimes size={24} />
        </button>
      </div>
      <ul className='flex flex-col gap-5 mt-5'>
        <li className='hover:border-b-2 hover:border-black h-6 cursor-pointer font-bold' onClick={toggleSidebar}>Проекты</li>
        <li className='hover:border-b-2 hover:border-black h-6 cursor-pointer font-bold' onClick={toggleSidebar}>Студия</li>
        <li className='hover:border-b-2 hover:border-black h-6 cursor-pointer font-bold' onClick={toggleSidebar}>Тарифы</li>
        <li className='hover:border-b-2 hover:border-black h-6 cursor-pointer font-bold' onClick={toggleSidebar}>Как мы работаем</li>
        <li className='hover:border-b-2 hover:border-black h-6 cursor-pointer font-bold' onClick={toggleSidebar}>Контакты</li>
      </ul>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-5'>
          <FaFacebookF className='cursor-pointer text-lg' />
          <FaInstagram className='cursor-pointer text-xl' />
        </div>
        <p className='text-lg font-bold'>998 97 700-00-00</p>
        <p>г. Ташкент, Яккасарайский район, ул. Нукус, здание 52</p>
      </div>
    </div>
  );
}

Sitebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sitebar;
