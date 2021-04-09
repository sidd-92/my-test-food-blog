import React from "react";

class RecipiesDetails extends React.Component {
  render() {
    let { id } = this.props.match.params;
    return (
      <div>
        <h3>Recipie ID: {id}</h3>
      </div>
    );
  }
}

export default RecipiesDetails;
