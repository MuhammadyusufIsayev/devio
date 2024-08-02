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
    <div className="px-4 md:px-8 lg:px-16 py-16 font-montserrat bg-[#fcfcfc]">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide mb-10 text-center">
        Они выбрали нас
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-8">
        {images.map((item) => (
          <div
            key={item.id}
            className="group relative border bg-cover bg-center h-56 md:h-72 lg:h-80 flex items-center justify-center"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <button className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black font-bold py-2 px-4 rounded z-10">
              Смотреть проект
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vibor;
