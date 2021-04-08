import React from "react";
import { NavLink } from "react-router-dom";
import { linkHome, linkCategories } from "../../routes";
class Navbar extends React.Component {
  render() {
    let navClassName =
      "nav-link text-xs lg:text-base p-2 rounded-md mb-1 sm:mb-0 hover:bg-red-300 hover:text-white transition duration-200";
    return (
      <nav className="absolute sm:static top-0 w-full flex justify-center sm:justify-start items-center flex-col sm:flex-row menubar">
        <NavLink
          to={linkHome}
          className="menubar-title text-md lg:text-xl mr-0 sm:mr-4 mb-2 sm:mb-0"
        >
          MyFoodBlog
        </NavLink>
        <NavLink
          to={linkHome}
          className={
            this.props.location.pathname === linkHome
              ? "nav-link text-xs p-2 rounded-md  lg:text-base bg-red-300 mb-1 sm:mb-0 text-white sm:mr-1"
              : `${navClassName} sm:mr-1`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={linkCategories}
          className={
            this.props.location.pathname === linkCategories
              ? "nav-link  text-xs p-2 rounded-md  lg:text-base bg-red-300 mb-1 sm:mb-0 text-white sm:ml-1"
              : `${navClassName} sm:ml-1`
          }
        >
          Categories
        </NavLink>
      </nav>
    );
  }
}

export default Navbar;
