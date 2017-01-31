const React = require('react'); 
const ReactDOM = require('react-dom');
const Filler = require('./FillerText')

class Webpage extends React.Component{
  render() {
    return (
        <div>
        <Filler />
        <Filler />
        The world's coolest webpage.
        </div>
    );
  }
}

module.exports = Webpage;
