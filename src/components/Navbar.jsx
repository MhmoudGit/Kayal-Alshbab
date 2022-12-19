import { navLinks } from "../data"
import { Link, useLocation } from "react-router-dom"
import { BsDot } from "react-icons/bs"

const Navbar = () => {
  const { pathname } = useLocation()
  const dot = <BsDot className="w-7 h-7 self-end" />

  return (
    <nav className="flex flex-col gap-6 w-full justify-start items-center pt-8 pb-10 lg:w-1/5 lg:h-screen shadow-md bg-white">
      <Link to="/">
        <img src="./logo.png" alt="logo" className="w-16" />
      </Link>
      <ul className="flex gap-6 w-full overflow-x-scroll text-sm lg:flex-col lg:overflow-hidden lg:h-full lg:pr-6 lg:pl-0">
        {navLinks.map((link) => (
          <Link to={link.route} key={link.name}>
            <li
              key={link.name}
              className={`
                        ${
                          pathname === link.route
                            ? `text-blue-500 bg-white border lg:border-none lg:bg-inherit`
                            : null
                        } px-2 flex justify-start items-center gap-2 whitespace-nowrap rounded-full font-semibold`}
            >
              <link.icon className="text-xl" />
              <span className="text-base flex items-center justify-between w-full">
                {link.name}
                {pathname === link.route ? dot : null}
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <button className="hidden justify-self-end border p-4 px-10 rounded-full shadow-md lg:block">
        تسجيل خروج
      </button>
    </nav>
  )
}

export default Navbar
