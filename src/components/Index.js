import "../tailwind.css";
import coffeeSelection from "./coffeeSelection";
import Logo from "../assets/shared/desktop/logo.svg";
import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Gran from "../assets/home/desktop/image-gran-espresso.png";

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
        <coffeeSelection
          img={Gran}
          title="Gran Espresso"
          info="Light and flavorsome blend with cocoa and black pepper for an intense experience."
        />
      </div>
    </div>
  );
};

export default Index;
