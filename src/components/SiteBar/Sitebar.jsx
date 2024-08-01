import logo from '../../assets/icons/logo.svg';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Sitebar = () => {
  return (
    <div className='fixed top-0 left-0 w-[15%] h-[100vh] p-[40px] flex flex-col justify-between font-montserrat bg-white shadow-lg'>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <ul className='flex flex-col gap-[20px]'>
        <li className='hover:border-b-2 hover:border-black h-[25px] cursor-pointer font-[700]'>Проекты</li>
        <li className='hover:border-b-2 hover:border-black h-[25px] cursor-pointer font-[700]'>Студия</li>
        <li className='hover:border-b-2 hover:border-black h-[25px] cursor-pointer font-[700]'>Тарифы</li>
        <li className='hover:border-b-2 hover:border-black h-[25px] cursor-pointer font-[700]'>Как мы работаем</li>
        <li className='hover:border-b-2 hover:border-black h-[25px] cursor-pointer font-[700]'>Контакты</li>
      </ul>
      <div className='flex flex-col gap-[20px]'>
        <div className='flex items-center gap-[20px]'>
          <FaFacebookF className='cursor-pointer text-[18px]' />
          <FaInstagram className='cursor-pointer text-[20px]' />
        </div>
        <p className='text-[16px] font-[700]'>998 97 700-00-00</p>
        <p>г. Ташкент, Яккасарайский район, ул. Нукус, здание 52</p>
      </div>
    </div>
  );
}

export default Sitebar;
