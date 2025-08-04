import { useState, useEffect } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
export default function HostVanDetails() {
  const { id } = useParams();
  const numericId = parseInt(id, 10) - 1;
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch("/server.json")
      .then((res) => res.json())
      .then((data) => setVan(data[numericId]));
  }, []);

  function typeColor(type) {
    if (type == "rugged") {
      return `bg-amber-800`;
    } else if (type == "simple") {
      return `bg-orange-400`;
    } else if (type == "luxury") {
      return `bg-purple-600`;
    }
  }

  return (
    <section className="w-full flex flex-col gap-8">
      {van ? (
        <>
          <p>
            <NavLink
              to=".."
              relative="path"
              className="hover:text-orange-7 transition ease-in duration-300"
            >
              &larr; Back to all vans
            </NavLink>
          </p>
          <div className="w-full flex flex-col md:flex-row gap-16">
            <div className="w-4/5 md:w-[150px] relative">
              <img
                alt={van.van}
                src={van.imageUrl}
                className="w-full aspect-square object-cover object-bottom clip-van border-1 border-orange-200"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center gap-2 md:py-8">
              <i
                className={`${typeColor(
                  van.type
                )} w-fit text-sm p-1 px-4 clip-van van-type ${
                  van.type
                } selected text-white`}
              >
                {van.type}
              </i>
              <h3 className="font-bold text-2xl">{van.van}</h3>
              <h4 className="text-xl">
                ${van.price}
                <small className="font-normal text-xl">/day</small>
              </h4>
            </div>
          </div>
          <nav className="flex w-full md:w-3/5 items-center justify-between text-black py-4  h-[5vh] border-b border-orange-200">
            <ul className="flex  gap-4 justify-center">
              <li>
                <NavLink
                  to={``}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm md:text-xl cursor-pointer text-orange-400"
                      : "text-sm md:text-xl cursor-pointer"
                  }
                  end
                >
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`pricing`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm md:text-xl cursor-pointer text-orange-400"
                      : "text-sm md:text-xl cursor-pointer"
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`photos`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm md:text-xl cursor-pointer text-orange-400"
                      : "text-sm md:text-xl cursor-pointer"
                  }
                >
                  Photos
                </NavLink>
              </li>
            </ul>
          </nav>
          <Outlet />
        </>
      ) : (
        <div className="w-full flex items-center justify-center h-[60vh]">
          <p className="text-xl text-orange-400">Loading...</p>
        </div>
      )}
    </section>
  );
}
