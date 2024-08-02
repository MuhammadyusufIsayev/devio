import { BsTelephone } from "react-icons/bs";
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";
import twobg from "../../assets/images/2bg.png";
import three from "../../assets/images/3.png";
import four from "../../assets/images/4.png";
import fourbg from "../../assets/images/4bg.png";
import five from "../../assets/images/5.png";

const Rabota = () => {
  return (
    <div className="px-4 md:px-12 py-16 font-montserrat bg-[#fcfcfc]">
      <h2 className="text-4xl md:text-6xl font-extralight tracking-wide mb-8 text-center">
        Как мы работаем?
      </h2>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold md:ml-9">Заявка</h2>
          <img className="w-full md:w-96" src={one} alt="Заявка" />
          <div className="flex flex-col gap-4 md:gap-8 w-full md:w-72">
            <p>Правда, специалисты отмечают, что высокая информативность</p>
            <p className="text-2xl font-bold">998 90 900-00-00</p>
            <button className="flex items-center justify-center gap-2 bg-white border-black border rounded-full h-10 w-full text-black font-bold">
              <BsTelephone /> Перезвонить
            </button>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${twobg})` }} className="flex flex-col md:flex-row justify-center items-center bg-cover bg-no-repeat bg-center h-96 w-full mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white w-full md:w-96">Постановка задачи</h2>
            <p className="text-white w-full md:w-72 font-light">Перераспределение бюджета уравновешивает диктат потребителя.</p>
          </div>
          <img className="w-[160px] md:w-96 max-w-sm" src={two} alt="Постановка задачи" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold md:ml-9">Сроки и цена</h2>
          <img className="w-full md:w-96" src={three} alt="Сроки и цена" />
          <div className="flex flex-col gap-4 md:gap-8 w-full md:w-72">
            <p className="w-full md:w-64">Исходя из структуры пирамиды Маслоу, охват аудитории индуцирует отраслевой стандарт.</p>
            <button className="flex items-center justify-center gap-2 bg-white border-black border rounded-full h-10 w-full text-black font-bold">Рассчитать стоимость</button>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${fourbg})` }} className="flex flex-col md:flex-row justify-center items-center bg-cover bg-no-repeat bg-center h-96 w-full mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white w-full md:w-96">Начало разработки</h2>
            <p className="text-white w-full md:w-72 font-light">Перераспределение бюджета уравновешивает диктат потребителя.</p>
          </div>
          <img className="w-[160px] md:w-72 max-w-sm" src={four} alt="Начало разработки" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold md:ml-9">Финиш</h2>
          <img className="w-full md:w-96" src={five} alt="Финиш" />
          <div className="flex flex-col gap-4 md:gap-8 w-full md:w-72">
            <p className="w-full md:w-64">Исходя из структуры пирамиды Маслоу, охват аудитории индуцирует отраслевой стандарт.</p>
          </div>
        </div>
        <button className="bg-white border-black border rounded-full h-10 w-full md:w-80 text-black font-bold text-center">Оставить заявку</button>
      </div>
    </div>
  );
};

export default Rabota;
