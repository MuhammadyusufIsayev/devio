import logo from '../../assets/icons/logoWhite.svg';
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 font-montserrat">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-lg md:text-xl lg:text-2xl font-light text-center md:text-left md:w-3/4 lg:w-1/2">
              Мы команда с большим опытом. Легко решаем сложные задачи и не срываем сроков.
            </h3>
            <img src={logo} alt="Logo" className="w-40 md:w-48 lg:w-56 mx-auto md:mx-0 mt-2" />
          </div>
          <ul className="flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left gap-4 md:gap-8">
            <li className="text-sm md:text-base lg:text-lg hover:border-b-2 border-white cursor-pointer">
              Экспресс-сайты
            </li>
            <li className="text-sm md:text-base lg:text-lg hover:border-b-2 border-white cursor-pointer">
              Премиум-сайты
            </li>
            <li className="text-sm md:text-base lg:text-lg hover:border-b-2 border-white cursor-pointer">
              Логотипы
            </li>
            <li className="text-sm md:text-base lg:text-lg hover:border-b-2 border-white cursor-pointer">
              Принт-дизайн
            </li>
            <li className="text-sm md:text-base lg:text-lg hover:border-b-2 border-white cursor-pointer">
              Контекстная реклама
            </li>
            <li className="flex items-center gap-2 text-sm md:text-base lg:text-lg">
              <BsTelephone /> 998 97 700-00-00
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
