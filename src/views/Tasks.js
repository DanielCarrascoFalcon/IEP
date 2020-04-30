import React from "react";
import Tasks from "../components/TasksList";

class Home extends React.Component {
  state = {
    tasks: [],
  };

  async componentDidMount() {
    const response = await fetch(`/tasks`);
    console.log("acaaaaaaaaaa1111", response);
    const json = await response.json();
    console.log("acaaaaaaaaaa", json);
    this.setState({ tasks: json });
  }

  render() {
    return (
      <div>
        <Tasks tasks={this.state.tasks} />
      </div>
    );
  }
}

export default Home;
