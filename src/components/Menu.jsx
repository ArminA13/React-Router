import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        // kam style = (({isActive}) => isActive? {color: "lightyellow", textDecoration: "none"} : {})  kam el chenq grum voch className voch style ayl  avtomat activ linelu depqum kkirarvi .active  selectory App.css-ic
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="courses"
      >
        Courses
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Menu;
