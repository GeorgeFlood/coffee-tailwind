import Logo from "../assets/shared/desktop/logo.svg";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";

export default function MobileFooter() {
  return (
    <div className="bg-slate-600 mt-20 text-center rounded-md py-12">
      <img className="m-auto" src={Logo} loading="lazy" alt="logo" />
      <nav className="list-none text-slate-50 weight-semibold text-xl my-16 ">
        <a href="/">
          <li className="cursor-pointer">Home</li>
        </a>
        <a href="/About">
          <li className="my-6 cursor-pointer">About us</li>
        </a>
        <a href="/Plan">
          <li className="cursor-pointer">Create your plan</li>
        </a>
      </nav>

      <div className="flex justify-around mx-12">
        <img className="cursor-pointer" src={Facebook} alt="Facebook Icon" />
        <img className="cursor-pointer" src={Instagram} alt="Instagram Icon" />
        <img className="cursor-pointer" src={Twitter} alt="Twitter icon" />
      </div>
    </div>
  );
}
