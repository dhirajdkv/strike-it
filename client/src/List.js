import React from "react";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }

  render() {
    return (
      <div>
        <ul className="List-group">
          {this.props.lists.map((data) => {
            return (
              <li className="list-group-item">
                {data.name}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={this.props.dele.bind(this, data.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
