
const Tarif = () => {
  return (
    <div className="px-4 md:px-12 py-16 font-montserrat bg-[#fcfcfc]">
      <h2 className="text-4xl md:text-6xl font-extralight tracking-wide mb-16 text-center">
        Постройте тариф сами
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold w-full md:w-80">
            Выбирайте только то, что Вам необходимо
          </h3>
        </div>
        <div>
          <h4 className="font-bold text-lg md:text-xl mb-10">1. Вам нужен фирменный стиль?</h4>
          <ul className="flex flex-col gap-8">
            <li className="p-5 w-full md:w-56 bg-white rounded-lg">Разработка логотипа</li>
            <li className="p-5 w-full md:w-[710px] bg-white rounded-lg font-semibold">Разработка логотипа и современного корпоративного стиля на носителях — бланки, папки, визитки</li>
            <li className="p-5 w-full md:w-72 bg-white rounded-lg">Улучшение текущего логотипа</li>
            <li className="p-5 w-full md:w-60 bg-white rounded-lg">Нет, мне это не нужно</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tarif;
