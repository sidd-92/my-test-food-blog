import React from "react";
import { NavLink } from "react-router-dom";
import { linkHome, linkCategories } from "../../routes";
class Navbar extends React.Component {
  render() {
    let navClassName =
      "text-xs lg:text-base sm:p-2 rounded-md  transition duration-200";
    return (
      <nav className="absolute sm:static top-0 w-full flex justify-center sm:justify-start items-center flex-row menubar shadow-sm sm:shadow-md">
        <NavLink
          to={linkHome}
          className="menubar-title text-md lg:text-xl mr-auto sm:mr-8"
        >
          MyFoodBlog
        </NavLink>
        <NavLink
          to={linkHome}
          className={
            this.props.location.pathname === linkHome
              ? "text-xs p-2 rounded-md  lg:text-base bg-crimson  text-white mr-1"
              : `${navClassName} mr-1 p-2`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={linkCategories}
          className={
            this.props.location.pathname === linkCategories
              ? "text-xs p-2 rounded-md  lg:text-base bg-crimson  text-white sm:ml-1"
              : `${navClassName} sm:ml-1 p-2`
          }
        >
          Categories
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
