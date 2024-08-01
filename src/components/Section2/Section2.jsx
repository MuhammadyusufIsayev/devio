import alaska from '../../assets/images/alaska.png';
import gadnt from '../../assets/images/gadnt.png';
import iphoneX from '../../assets/images/iphoneX.png';
import itau from '../../assets/images/itau.png';
import vagabond from '../../assets/images/vagabond.png';

const Section2 = () => {
  return (
    <div className="px-[50px] py-[60px] font-montserrat grid grid-cols-2 gap-8 bg-[#fcfcfc]">
      {[
        { id: 1, image: alaska },
        { id: 2, image: gadnt },
        { id: 3, image: iphoneX },
        { id: 4, image: itau },
        { id: 5, image: vagabond },
      ].map((item) => (
        <div
          key={item.id}
          className="group relative border w-[710px] bg-cover bg-center h-[350px] flex items-center justify-center"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black font-bold py-2 px-4 rounded z-10">
            Смотреть проект
          </button>
        </div>
      ))}
      <div className="border w-[710px] bg-cover bg-center h-[350px] flex items-center justify-center cursor-pointer">
        <span className="font-extrabold text-[18px]">Все работы</span>
      </div>
    </div>
  );
};

export default Section2;
