import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {};

  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID bWbV24UyqfQnL9UxBJjb0XFo-FsHk0scUBX6mZLLgTM"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
