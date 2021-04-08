import React from "react";

class CategoryDetails extends React.Component {
  render() {
    let { id } = this.props.match.params;
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }
}

export default CategoryDetails;
