import Logo from "../assets/shared/desktop/logo.svg";
import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";

const Index = function () {
  return (
    <div>
      <nav className="my-5 flex align-center justify-around ">
        <img src={Logo} alt="coffee roasters logo" height={30} width={150} />
        <img src={Hamburger} alt="hambuger menu" />
      </nav>

      <div className="bg-desktop-index-hero">
        <h1>Great Coffee made simple</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
      </div>
    </div>
  );
};

export default Index;
