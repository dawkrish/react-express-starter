import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backendData : null
    };
  }

  componentDidMount() {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => this.setState({ backendData: data.message }));
  }

  render() {
    const { backendData } = this.state;
    return (
      <div>
        <p>{backendData}</p>
      </div>
    );
  }
}

export default App;
