import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      ev: "",
    };
  }
  getValue = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          onChange={this.getValue}
        ></input>
        <button
          className="btn btn-primary form-control"
          onClick={this.props.add.bind(this, this.state.item)}
        >
          SubMit
        </button>
      </div>
    );
  }
}

export default Form;
