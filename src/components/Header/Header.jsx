import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header w-full h-[500px] md:h-screen bg-no-repeat bg-cover px-8 py-6 md:px-12 font-montserrat flex flex-col justify-between">
      <nav className="hidden md:block">
        <ul className="flex items-center justify-between text-white font-extrabold tracking-wider">
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-6">Экспресс сайты</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-6">Премиум сайты</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-6">Лого</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-6">Принт-дизайн</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-6">Контекстная реклама</li>
          <li className="flex items-center gap-2 bg-white rounded-full h-10 text-black px-4 cursor-pointer">
            <BsFillTelephoneFill /> 998 97 700-00-00
          </li>
        </ul>
      </nav>
      <div className="flex-grow flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-[36px] md:text-7xl font-bold tracking-wider w-full md:w-[700px]">Создание сайтов в Ташкенте</h1>
        <p className="mt-12 mb-24 text-base md:text-lg">Небольшой дескприт из нескольких фраз</p>
        <button className="bg-white rounded-full h-10 w-full md:w-80 text-black font-extrabold px-4">Смотреть работы</button>
      </div>
    </div>
  );
}

export default Header;
