import { BsFillTelephoneFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header w-[100%] h-[100vh] bg-no-repeat bg-cover px-[50px] py-[30px] font-montserrat">
      <nav>
        <ul className="flex items-center justify-between text-white font-[800] tracking-wider">
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-[25px]">Экспресс сайты</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-[25px]">Премиум сайты</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-[25px]">Лого</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-[25px]">Принт-дизайн</li>
          <li className="hover:border-b-2 hover:border-white cursor-pointer h-[25px]">Контекстная реклама</li>
          <li className="flex items-center gap-[10px] bg-white rounded-full h-[40px] text-[#000] px-[20px] cursor-pointer">
            <BsFillTelephoneFill /> 998 97 700-00-00
          </li>
        </ul>
      </nav>
      <div className="text-white flex flex-col justify-center mt-[300px] w-[900px]">
        <h1 className="text-[70px] font-bold tracking-wider w-[700px]">Создание сайтов в Ташкенте</h1>
        <p className="mt-[50px] mb-[200px]">Небольшой дескприт из нескольких фраз</p>
        <button className="bg-white rounded-full h-[40px] w-[320px] text-[#000] font-[800] px-[20px]">Смотреть работы</button>
      </div>
    </div>
  )
}

export default Header;
