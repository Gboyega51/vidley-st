import { Component } from "react";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <Movies />
        </main>
      </div>
    );
  }
}

export default App;
