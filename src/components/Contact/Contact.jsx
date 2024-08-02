const Contact = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 font-montserrat bg-[#fcfcfc] text-center">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-wide mb-8 md:mb-12 lg:mb-16">
        Контакты
      </h2>
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8">
        +998 97 700-00-00
      </h3>
      <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 lg:mb-10">
        info@devio.uz
      </p>
      <p className="text-base md:text-lg lg:text-xl font-semibold mb-4 md:mb-6 lg:mb-8">
        г. Ташкент, Яккасарайский район, ул. Нукус, здание 52
      </p>
      <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10">
        Понедельник-суббота, с 9:00 до 18:00. Воскрсенье — выходной.
      </p>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11223.262557819771!2d69.19337250782841!3d41.325356649273246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bfa8c4225e5%3A0x28f17ddc027649c6!2z0JzQtdGH0LXRgtGMINCa0YPQutGH0LA!5e0!3m2!1sru!2s!4v1722525461117!5m2!1sru!2s" 
        className="w-full h-64 md:h-80 lg:h-96 rounded-2xl"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Contact;
