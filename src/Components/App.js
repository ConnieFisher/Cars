import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {};

  async onSearchSubmit(term) {
    const reponse =await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID bWbV24UyqfQnL9UxBJjb0XFo-FsHk0scUBX6mZLLgTM"
      }
    });

    console.log(reponse.data.results);
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
