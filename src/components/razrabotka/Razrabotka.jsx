import { useState } from "react";
import { GrStatusGood } from "react-icons/gr";

const Razrabotka = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  const plans = [
    {
      title: "Экспресс",
      duration: "1-3 дня",
      price: "1-3 млн сум",
      features: [
        "Дизайн-шаблон",
        "Административная панель",
        "Две языковые версии сайта",
        "Наполнение",
        "Обучение управлению сайтом",
        "Доменное имя и хостинг в подарок",
      ],
      description: [
        "Исходя из структуры пирами Маслоу, охват аудитории индуцирует отраслевой стандарт.",
        "Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении.",
      ],
      buttonText: "Заказать",
      style: "bg-white",
    },
    {
      title: "Экспресс +",
      duration: "7-10 дней",
      price: "5 млн сум",
      features: [
        "Разработка логотипа",
        "Дизайн-шаблон с индивидуализацией",
        "Административная панель",
        "Две языковые версии сайта",
        "Наполнение",
        "Обучение управлению сайтом",
        "Доменное имя и хостинг в подарок",
      ],
      description: [
        "Исходя из структуры пирами Маслоу, охват аудитории индуцирует отраслевой стандарт.",
        "Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении.",
      ],
      buttonText: "Заказать",
      style: "bg-white",
    },
    {
      title: "Премиум",
      duration: "до 30 дней",
      price: "8-12 млн",
      features: [
        "Разработка корпоративного стиля",
        "Дизайн-шаблон",
        "Административная панель",
        "Разработка мобильных макетов сайта",
        "языковые версии сайта без ограничений",
        "Наполнение",
        "Обучение управлению сайтом",
        "Доменное имя и хостинг в подарок",
      ],
      description: [
        "Исходя из структуры пирами Маслоу, охват аудитории индуцирует отраслевой стандарт.",
        "Текстами рефератов можно пользоваться совершенно бесплатно, однако при транслировании и предоставлении.",
      ],
      buttonText: "Заказать",
      style: "bg-gradient-to-b from-yellow-300 to-cyan-300",
    },
  ];

  return (
    <div className="px-12 py-16 font-montserrat bg-gray-50">
      <h2 className="text-4xl md:text-6xl font-extralight tracking-wider mb-16 text-center">
        Сколько стоит разработка?
      </h2>
      <div className="space-y-8 md:space-y-0 md:flex md:justify-center md:gap-24">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 w-full md:w-80 shadow-lg ${plan.style} p-10 rounded-2xl h-full`}
          >
            <div
              className="md:border-b-2 border-dotted border-black pb-10 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-lg md:text-2xl font-bold">{plan.title}</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl">{plan.duration}</p>
                  <p className="text-2xl font-bold">{plan.price}</p>
                </div>
                <div className="md:hidden">
                  {open === index ? "-" : "+"}
                </div>
              </div>
            </div>
            <div
              className={`${
                open === index ? "block" : "hidden"
              } md:block transition-all duration-300`}
            >
              {plan.features.map((feature, idx) => (
                <div key={idx} className="mb-6">
                  <h4 className="font-semibold flex items-center gap-2 mb-2">
                    <GrStatusGood className="text-xl" />
                    {feature}
                  </h4>
                  <p>{plan.description[0]}</p>
                </div>
              ))}
              <button className="bg-white rounded-full h-10 w-full text-black font-bold px-4 border border-black">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Razrabotka;
