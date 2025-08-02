import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="flex items-center justify-between text-black p-4 px-8 md:px-16 h-[10vh]">
      <NavLink to="/">
        <div className="text-xl font-bold clip-van bg-orange-300 py-1 flex items-center rounded-md px-8">
          <h1 className="">VANLIFE</h1>
        </div>
      </NavLink>
      <ul className="flex gap-4 justify-center">
        <li>
          <NavLink to="/host" className={({isActive}) => isActive? "text-xl cursor-pointer text-orange-400" : "text-xl cursor-pointer"}>
            Host
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => isActive? "text-xl cursor-pointer text-orange-400" : "text-xl cursor-pointer"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/vans" className={({isActive}) => isActive? "text-xl cursor-pointer text-orange-400" : "text-xl cursor-pointer"}>
            Vans
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
