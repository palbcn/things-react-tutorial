import React, { Component } from "react"

class InputThing extends Component {
  state = {
    title: "",
    content: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addThingProps(this.state.title, this.state.content);
    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <input type="text" name="title" className="input-text" placeholder="Add Thing..." value={this.state.title} onChange={this.onChange} />

        {/*<textarea name="content" placeholder="content..." className="input-text" value={this.state.content} onChange={this.onChange} />*/}

        <input type="submit" className="input-submit" value="Submit" />

      </form>
    )
  }
}
export default InputThing