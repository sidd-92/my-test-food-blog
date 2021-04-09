import React from "react";

class FoodCard extends React.Component {
  render() {
    return this.props.url === "null" ? (
      <div
        onClick={this.props.handleClick}
        className="bg-crimson flex flex-col justify-center items-center w-48 h-48 sm:w-80 sm:h-80 rounded-md custom-shadow-2 cursor-pointer group"
      >
        <div className="text-center text-white group-hover:underline mb-4">
          {this.props.category}
        </div>
        <div>
          <i
            className="pi pi-arrow-right"
            style={{ fontSize: "2em", color: "white" }}
          ></i>
        </div>
      </div>
    ) : (
      <div
        onClick={this.props.handleClick}
        className="bg-crimson w-48 sm:w-80 sm:h-80 rounded-md custom-shadow-2 cursor-pointer group"
      >
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
