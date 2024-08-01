import first from '../../assets/images/vibor/2.jpg';
import second from '../../assets/images/vibor/3.jpg';
import third from '../../assets/images/vibor/4.jpg';
import fourth from '../../assets/images/vibor/5.jpg';
import fifth from '../../assets/images/vibor/6.jpg';
import sixth from '../../assets/images/vibor/7.jpg';

const Vibor = () => {
  const images = [
    { id: 1, image: first },
    { id: 2, image: second },
    { id: 3, image: third },
    { id: 4, image: fourth },
    { id: 5, image: fifth },
    { id: 6, image: sixth },
  ];

  return (
    <div className="px-[50px] py-[60px] font-montserrat bg-[#fcfcfc]">
      <h2 className="text-[60px] font-extralight tracking-[.25em] mb-10 text-center">Они выбрали нас</h2>
      <div className="grid grid-cols-2 gap-8 mt-8">
        {images.map((item) => (
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
      </div>
    </div>
  );
}

export default Vibor;
