import React from "react"

class ThingItem extends React.Component {

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#d35e0f",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    return (
      <li className="item">

        <input type="checkbox"
          checked={this.props.thing.completed}
          onChange={() => this.props.handleChangeProps(this.props.thing.id)}
        />

        <button onClick={() => this.props.deleteThingProps(this.props.thing.id)}>
          Delete
        </button>

        <span style={this.props.thing.completed ? completedStyle : null}>
          {this.props.thing.title}
        </span>

      </li>
    )
  }
}

export default ThingItem