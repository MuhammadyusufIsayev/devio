import Header from "./components/Header/Header"
import './App.css'
import Sitebar from "./components/SiteBar/Sitebar"
import Section2 from "./components/Section2/Section2"
import Agency from "./components/Agency/Agency"
import Razrabotka from "./components/razrabotka/Razrabotka"
import Tarif from "./components/Tarif/Tarif"
import Rabota from "./components/Rabota/Rabota"
import Vibor from "./components/Vibor/Vibor"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div className="flex">
        <Sitebar />
        <div className="w-[100%] ml-[15%]">
          <Header />
          <Section2 />
          <Agency />
          <Razrabotka/>
          <Tarif/>
          <Rabota/>
          <Vibor/>
          <Contact/>   
          <Footer/>      
        </div>
    </div>
  )
}

export default App