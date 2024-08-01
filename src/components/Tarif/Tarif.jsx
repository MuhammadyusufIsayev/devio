
const Tarif = () => {
  return (
    <div className="px-[50px] py-[60px] font-montserrat bg-[#fcfcfc]">
        <h2 className="text-[60px] font-extralight tracking-[.25em] mb-16 text-center">Постройте тариф сами</h2>
        <div className="flex justify-center gap-[80px]">
            <div>
                <h3 className="text-[36px] font-[800] w-[350px]">Выбирайте только то, что Вам необходимо</h3>
            </div>
            <div>
                <h4 className="font-[700] text-[18px] mb-[40px]">1. Вам нужен фирменный стиль?</h4>
                <ul className="flex flex-col gap-[30px]">
                    <li className="p-[20px] w-[225px] bg-white rounded-lg">Разработка логотипа</li>
                    <li className="p-[20px] w-[710px] bg-white rounded-lg font-[600]">Разработка логотипа и современного корпоративного стиля на носителях — бланки, папки, визитки</li>
                    <li className="p-[20px] w-[300px] bg-white rounded-lg">Улучшение текущего логотипа</li>
                    <li className="p-[20px] w-[235px] bg-white rounded-lg">Нет, мне это не нужно</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Tarif