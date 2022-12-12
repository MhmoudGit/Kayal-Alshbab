import { navLinks } from "../data";
import { Link, useLocation } from "react-router-dom";
import { BsDot } from "react-icons/bs";

const Navbar = () => {
  const { pathname } = useLocation();
  const dot = <BsDot className="text-3xl self-end" />;

  return (
    <nav className="flex flex-col w-full justify-start items-center py-10 lg:w-1/6 lg:h-screen shadow-md bg-white">
      <Link
        to="/"
        className="flex justify-center items-center lg:self-start px-9 mb-5"
      >
        <img src="./logo.png" alt="logo" className="w-14" />
        <h1 className="text-xl mb-5">خيال الشباب</h1>
      </Link>
      <ul className=" flex w-full overflow-x-scroll text-sm lg:flex-col lg:overflow-hidden lg:h-full lg:px-5">
        {navLinks.map((link) => (
          <Link to={link.route} key={link.name}>
            <li
              key={link.name}
              className={`
                        ${
                          pathname === link.route
                            ? `text-blue-500 bg-white border lg:border-none lg:bg-inherit`
                            : null
                        } 
                            m-3 px-2 flex  justify-start items-center whitespace-nowrap rounded-full lg:text-lg font-bold`}
            >
              <p className="m-2">{link.icon}</p>
              {link.name}
              {pathname === link.route ? dot : null}
            </li>
          </Link>
        ))}
      </ul>
      <button className="hidden justify-self-end border p-4 px-10 rounded-full shadow-md lg:block">
        تسجيل خروج
      </button>
    </nav>
  );
};

export default Navbar;
