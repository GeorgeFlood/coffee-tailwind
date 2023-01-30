import Logo from "../assets/shared/desktop/logo.svg";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";

export default function MobileFooter() {
  return (
    <div className="bg-slate-600 mt-20 text-center rounded-md py-12">
      <img className="m-auto" src={Logo} loading="lazy" alt="logo" />
      <nav className="list-none text-slate-50 weight-semibold text-xl my-6">
        <li>Home</li>
        <li className="my-6">About us</li>
        <li>Create your plan</li>
      </nav>

      <div className="flex justify-around mx-12">
        <img src={Facebook} alt="Facebook Icon" />
        <img src={Instagram} alt="Instagram Icon" />
        <img src={Twitter} alt="Twitter icon" />
      </div>
    </div>
  );
}
