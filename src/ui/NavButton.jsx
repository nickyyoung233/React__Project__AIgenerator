import { NavLink } from "react-router-dom";

export default function NavButton({ children, to, color }) {
  let newColor = "";
  switch (color) {
    case "blue":
      newColor = "hover:bg-blue-500 focus:bg-blue-500";
      break;
    case "orange":
    default:
      newColor = "hover:bg-orange-400 focus:bg-orange-400";
      break;
  }
  console.log(newColor);
  return (
    <NavLink
      to={to}
      className={`inline-block rounded-lg bg-stone-300/[.2] px-3 py-3 font-semibold uppercase tracking-wide transition-colors duration-300   focus:outline-none sm:px-3 sm:py-2 ${newColor}`}
    >
      {children}
    </NavLink>
  );
}
