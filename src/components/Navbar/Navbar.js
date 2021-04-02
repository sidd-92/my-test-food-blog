import { Menubar } from "primereact/menubar";
import React from "react";

class Navbar extends React.Component {
  state = {
    items: [
      {
        label: "Home",
      },
      {
        label: "Categories",
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
