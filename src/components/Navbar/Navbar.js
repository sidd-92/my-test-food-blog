import { Menubar } from "primereact/menubar";
import React from "react";
import { linkHome, linkCategories } from "../../routes";

class Navbar extends React.Component {
  state = {
    items: [
      {
        label: "Home",
        command: (event) => {
          this.props.history.push(linkHome);
        },
      },
      {
        label: "Categories",
        command: (event) => {
          this.props.history.push(linkCategories);
        },
      },
    ],
  };
  render() {
    return (
      <Menubar
        start={
          <div className="text-3xl font-bold mr-4 text-red-600">MyFoodBlog</div>
        }
        model={this.state.items}
      />
    );
  }
}

export default Navbar;
