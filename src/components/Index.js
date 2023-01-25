import "../tailwind.css";

import CoffeeSelection from "./CoffeeSelection";
import Logo from "../assets/shared/desktop/logo.svg";
import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Gran from "../assets/home/desktop/image-gran-espresso.png";
import Planalto from "../assets/home/desktop/image-planalto.png";
import Piccollo from "../assets/home/desktop/image-piccollo.png";
import Danche from "../assets/home/desktop/image-danche.png";

const Index = function () {
  return (
    <div className="mx-5">
      <div>
        <nav className="my-5 flex align-center bg-cover justify-between mx-5">
          <img src={Logo} alt="coffee roasters logo" height={30} width={150} />
          <img src={Hamburger} alt="hambuger menu" />
        </nav>
      </div>

      <div className=" flex bg-mobile-index rounded-lg">
        <div className="text-center text-slate-100 my-auto">
          <h1 className="text-5xl">
            Great Coffee <br></br> made simple
          </h1>
          <p className="my-5 mx-5">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className="p-4 bg-custom-green rounded-md">
            Create your plan
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-center mt-16 text-4xl font-semibold text-gray-400">
          Our collection
        </h1>

        <CoffeeSelection
          img={Gran}
          title="Gran Espresso"
          info="Light and flavorsome blend with cocoa and black pepper for an intense experience."
        />
        <CoffeeSelection
          img={Planalto}
          title="Planalto"
          info="Brazilian dark roast with rich and valvety body, and hints of fruits and nuts."
        />
        <CoffeeSelection
          img={Piccollo}
          title="Piccollo"
          info="Mild and smooth blend featuring notes of toasted almond and dried cherry."
        />
        <CoffeeSelection
          img={Danche}
          title="Danche"
          info="Ethiopian hand-harvested blend densely packed with vibrant fruit notes."
        />
      </div>
    </div>
  );
};

export default Index;
