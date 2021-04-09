import React from "react";

class CategoryChip extends React.Component {
  render() {
    return (
      <div
        onClick={(e) => {
          e.stopPropagation();
          this.props.handleChipClick();
        }}
        className="bg-white border border-crimson rounded-md text-crimson text-sm h-6 px-2 hover:text-white hover:bg-crimson focus:bg-crimson transition duration-200 cursor-pointer"
      >
        {this.props.label}
      </div>
    );
  }
}

export default CategoryChip;
