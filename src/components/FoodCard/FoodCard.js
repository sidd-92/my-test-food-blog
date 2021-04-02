import React from "react";

class FoodCard extends React.Component {
  render() {
    return (
      <div className="bg-red-600 w-80 h-80 rounded-md custom-shadow-2 cursor-pointer  group">
        <div className=" transition duration-200 group-hover:opacity-70">
          <img src={this.props.url} alt="URL" className="rounded-t-md" />
        </div>
        <div className="text-center text-white group-hover:underline">
          {this.props.category}
        </div>
      </div>
    );
  }
}

export default FoodCard;
