import { NavLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function Header() {
  return (
    <header className="flex justify-between align-center mb-16 sm:mb-12">
      <div>
        <NavLink to={ROUTES.HOME}>
          <span className="uppercase">Bernie S.</span>
        </NavLink>
      </div>
      <div>
        <ul className="m-0 p-0 flex gap-3 justify-between align-center">
          <li>
            <NavLink
              className={(navData) =>
                `uppercase hover:text-neutral-900 ${
                  navData.isActive ? "text-neutral-900" : "text-neutral-600"
                }`
              }
              to={ROUTES.HOME}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                `uppercase hover:text-neutral-900 ${
                  navData.isActive ? "text-neutral-900" : "text-neutral-600"
                }`
              }
              to={ROUTES.WORKS}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) =>
                `uppercase hover:text-neutral-900 ${
                  navData.isActive ? "text-neutral-900" : "text-neutral-600"
                }`
              }
              to={ROUTES.ABOUT}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
