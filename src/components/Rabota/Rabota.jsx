import { BsTelephone } from "react-icons/bs";
import one from "../../assets/images/1.png"
import two from "../../assets/images/2.png"
import twobg from "../../assets/images/2bg.png"
import three from "../../assets/images/3.png"
import four from "../../assets/images/4.png"
import fourbg from "../../assets/images/4bg.png"
import five from "../../assets/images/5.png"

const Rabota = () => {
  return (
    <div className="px-[50px] py-[60px] font-montserrat bg-[#fcfcfc]">
        <h2 className="text-[60px] font-extralight tracking-[.25em] mb-2 text-center">Как мы работаем?</h2>
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
                <h2 className="text-[70px] font-[700] ml-9">Заявка</h2>
                <img className="w-[500px]" src={one} alt="" />
                <div className="w-[300px] flex flex-col gap-[20px]">
                    <p>
                    Правда, специалисты отмечают, что высокая информативность 
                    </p>
                    <p className="text-[30px] font-[700]">998 90 900-00-00</p>
                    <button className="flex items-center justify-center gap-[10px] bg-white border-[black] border-[1px] rounded-full h-[40px] w-full text-[#000] font-[800]"><BsTelephone/> Перезвонить</button>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${twobg})` }} className="flex justify-center items-center bg-cover bg-no-repeat bg-center h-[600px] w-full">
                <div>
                    <h2 className="text-[70px] font-[700] text-white w-[600px]">Постановка задачи</h2>
                    <p className="text-white w-[300px] font-light">Перераспределение бюджета уравновешивает диктат потребителя. </p>
                </div>
                <img className="w-[300px]" src={two} alt="" />
            </div>
            <div className="flex justify-center items-center">
                <h2 className="text-[70px] w-[300px] font-[700] ml-9">Сроки и цена</h2>
                <img className="w-[600px]" src={three} alt="" />
                <div className="w-[300px] flex flex-col gap-[20px]">
                    <p className="w-[270px]">
                    Исходя из структуры пирамиды Маслоу, охват аудитории индуцирует отраслевой стандарт. 
                    </p>
                    <button className="flex items-center justify-center gap-[10px] bg-white border-[black] border-[1px] rounded-full h-[40px] w-full text-[#000] font-[800]">Рассчитать стоимость</button>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${fourbg})` }} className="flex justify-center items-center bg-cover bg-no-repeat bg-center h-[600px] w-full">
                <div>
                    <h2 className="text-[70px] font-[700] text-white w-[600px]">Начало разработки</h2>
                    <p className="text-white w-[300px] font-light">Перераспределение бюджета уравновешивает диктат потребителя. </p>
                </div>
                <img className="w-[300px]" src={four} alt="" />
            </div>
            <div className="flex justify-center items-center">
                <h2 className="text-[70px] w-[300px] font-[700] ml-9">Финиш</h2>
                <img className="w-[600px]" src={five} alt="" />
                <div className="w-[300px] flex flex-col gap-[20px]">
                    <p className="w-[270px]">
                    Исходя из структуры пирамиды Маслоу, охват аудитории индуцирует отраслевой стандарт. 
                    </p>
                </div>
            </div>
            <button className="bg-white border-[black] border-[1px] rounded-full h-[40px] w-[320px] text-[#000] font-[800] text-center">Оставить заявку</button>
        </div>
    </div>
  )
}

export default Rabota