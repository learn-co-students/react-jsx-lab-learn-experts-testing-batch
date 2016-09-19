const React = require('react')
import FillerText from './FillerText'

class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage.</h1>
        <FillerText />
        <FillerText />
      </div>
    );
  }
}

module.exports = Webpage
