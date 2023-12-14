import React from "react";
import List from "./List";
import Form from "./Form";
import axios from "axios";

class All extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount = () => {
    axios
      .get("http://localhost:8080/api/todo")
      .then((response) => {
        this.setState({
          items: response.data,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  add = (item) => {
    const id = this.state.items.length;
    const record = { id: id + 1, name: item };
    axios
      .post("http://localhost:8080/api/todo", record)
      .then(this.componentDidMount())
      .catch((error) => {
        console.log(error);
      });
  };

  dele = (idd) => {
    if (window.confirm("Are you sure?")) {
      axios
        .delete(`http://localhost:8080/api/todo/${idd}`)
        .then(
          this.setState({
            items: this.state.items.filter((i) => i.id !== idd),
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <div className="container">
        <Form add={this.add} />
        <List lists={this.state.items} dele={this.dele} />
      </div>
    );
  }
}

export default All;
