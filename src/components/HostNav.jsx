import { NavLink } from "react-router-dom";
export default function HostNav() {
  return (
    <nav className="flex items-center justify-between text-black py-4  h-[5vh] border-b border-orange-300">
      <ul className="flex gap-4 justify-center">
        <li>
          <NavLink to="/host" className={({isActive}) => isActive? "text-xl cursor-pointer text-orange-400" : "text-xl cursor-pointer"} end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/host/income" className={({isActive}) => isActive? "text-xl cursor-pointer text-orange-400" : "text-xl cursor-pointer"}>
            Income
          </NavLink>
        </li>
        <li>
          <NavLink to="/host/reviews" className={({isActive}) => isActive? "text-xl cursor-pointer text-orange-400" : "text-xl cursor-pointer"}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
