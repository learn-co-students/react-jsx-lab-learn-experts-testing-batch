const React = require('react')

class Webpage extends React.component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

module.exports = Webpage;