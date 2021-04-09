import React from "react";
import { Chip } from "primereact/chip";

class CategoryChip extends React.Component {
  render() {
    return <Chip label={this.props.label} className="custom-chip"></Chip>;
  }
}

export default CategoryChip;
