import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/card-list";
import { SearchBox } from "./Components/search-box/search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  render() {
    const { monsters, searchfield } = this.state;
    const filteredMonster = monsters.filter((mon) =>
      mon.name.toLowerCase().includes(searchfield.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster-Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={(e) => {
            this.setState({ searchfield: e.target.value });
          }}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
