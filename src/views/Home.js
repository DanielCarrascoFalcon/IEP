import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Esta es la vista home</h1>
        <Link to="/tasks">
          <h1>clickeame para ir a tareas</h1>
        </Link>
      </div>
    );
  }
}

export default Home;
