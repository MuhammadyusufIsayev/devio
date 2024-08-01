import logo from '../../assets/icons/logoWhite.svg';
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-black h-[400px] text-white">
      <div className="px-[50px] py-[60px] font-montserrat flex flex-col gap-[135px]">
        <div className='flex justify-between'>
          <h3 className='text-[36px] font-light w-[1000px]'>
            Мы команда с большим опытом. Легко решаем сложные задачи и не срываем сроков.
          </h3>
          <img src={logo} alt="Logo" />
        </div>
        <ul className='flex justify-between items-center'>
          <li className='hover:border-b-2 border-white cursor-pointer h-[25px]'>Экспресс-сайты</li>
          <li className='hover:border-b-2 border-white cursor-pointer h-[25px]'>Премиум-сайты</li>
          <li className='hover:border-b-2 border-white cursor-pointer h-[25px]'>Логотипы</li>
          <li className='hover:border-b-2 border-white cursor-pointer h-[25px]'>Принт-дизайн</li>
          <li className='hover:border-b-2 border-white cursor-pointer h-[25px]'>Контекстная реклама</li>
          <li className='flex items-center gap-[10px] text-[22px]'><BsTelephone /> 998 97 700-00-00</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
