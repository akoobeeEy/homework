import { Link } from "react-scroll";
import { logo } from "../../../assets";
import Button from "../../../constants/button/Button";
import { navLinksData } from "../../../constants";

const Nav = () => {
  return (
    <div className="grid items-center grid-cols-12">
      <div className="flex items-center col-span-6 gap-10 md:col-span-8">
        <a href="#logo" >
          <img
            src={logo}
            alt="logo"
            className="duration-150 hover:-translate-y-1 hover:hue-rotate-60"
          />
        </a>
        <ul className="hidden gap-3 md:flex">
        {navLinksData.map((item) => (
          <li
            className="text-base font-normal tracking-wide text-gray-400 duration-300 cursor-pointer hover:text-designColor"
            key={item.id}
          >
            <Link className="nav-link"
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            {item.title}
            </Link>
          </li>
        ))}
        </ul>
      </div>
      <div className="flex justify-end col-span-6 md:col-span-4">
        <div className="flex items-center gap-4 lg:gap-10">
          <a href="#cart" className="hidden nav-link sm:flex">
            Cart(0)
          </a>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default Nav;
