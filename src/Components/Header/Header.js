import React from "react";
import { Link } from "react-router-dom";
const NAVIGATION = [
  {
    display: "Community",
    url: "#",
    status: "active",
  },
  {
    display: "Portfolios",
    url: "#",
    status: "",
  },
  {
    display: "Inspiration",
    url: "#",
    status: "",
  },
  {
    display: "News",
    url: "#",
    status: "",
  },
  {
    display: "Feature",
    url: "#",
    status: "",
  },
  {
    display: "Jobs",
    url: "#",
    status: "",
  },
];
const Header = () => {
  return (
    <header className="d-flex justify-content-center ">
      <nav className="mt-4">
        <ul className="d-flex align-items-center justify-content-evenly">
          {NAVIGATION.map((item, index) => (
            <li key={index}>
              <Link to={item.url} className={item.status}>
                {item.display}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
