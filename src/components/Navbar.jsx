import React, { useState } from "react";

const menus = [
  {
    id: 1,
    icon: "fa-solid fa-house-chimney",
    url: "#header",
  },
  {
    id: 2,
    icon: "fa-solid fa-user",
    url: "#about",
  },
  {
    id: 3,
    icon: "fa-solid fa-book",
    url: "#experience",
  },
  {
    id: 4,
    icon: "fa-solid fa-people-carry-box",
    url: "#services",
  },
  {
    id: 5,
    icon: "fa-solid fa-diagram-project",
    url: "#projects",
  },
  {
    id: 6,
    icon: "fa-solid fa-address-book",
    url: "#contact",
  },
];

const Navbar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="navbar">
      {menus.map((item, index) => (
        <a
          href={item.url}
          key={index}
          className={`${item.id === active ? "active" : ""}`}
          onClick={() => setActive(item.id)}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default Navbar;
