import React from "react";
import { v4 as uuidv4 } from "uuid";

import "../Things.css"

import Header from "./Header";
import ThingsList from "./ThingsList";
import InputThing from "./InputThing";

class ThingsContainer extends React.Component {

  state = {
    things: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        content: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        content: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        content: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = (id) => {
    this.setState({
      things: this.state.things.map(thing => {
        if (thing.id === id) {
          thing.completed = !thing.completed;
        }
        return thing;
      })
    });
  };

  delThing = id => {
    this.setState({ things: [...this.state.things.filter(t => { return t.id !== id; })] });
  };

  addThing = (title, content) => {
    const newThing = { id: uuidv4(), title, content, completed: false };
    this.setState({ things: [...this.state.things, newThing] });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <InputThing addThingProps={this.addThing} />
        <ThingsList things={this.state.things} handleChangeProps={this.handleChange}
          deleteThingProps={this.delThing} />
      </div>
    )
  }
}
export default ThingsContainer