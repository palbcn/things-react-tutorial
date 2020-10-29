import React from "react";
import ThingItem from "./ThingItem";

class ThingsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.things.map(thing => (
          <ThingItem
            key={thing.id}
            thing={thing}
            handleChangeProps={this.props.handleChangeProps}
            deleteThingProps={this.props.deleteThingProps}
          />
        ))}
      </div>
    )
  }
}

export default ThingsList