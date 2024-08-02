import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Sitebar from "./components/SiteBar/Sitebar";
import Section2 from "./components/Section2/Section2";
import Agency from "./components/Agency/Agency";
import Razrabotka from "./components/razrabotka/Razrabotka";
import Tarif from "./components/Tarif/Tarif";
import Rabota from "./components/Rabota/Rabota";
import Vibor from "./components/Vibor/Vibor";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa"; 

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:hidden flex items-center p-4 justify-between">
        <button
          className="mr-4"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <a href="tel:+9989770000000" className="flex items-center text-gray-800 hover:text-gray-600">
          <FaPhone size={20} className="mr-2" />
          <span>+998 97 700-00-00</span>
        </a>
      </div>
      <Sitebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="w-full md:ml-[15%]">
        <Header />
        <Section2 />
        <Agency />
        <Razrabotka />
        <Tarif />
        <Rabota />
        <Vibor />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
