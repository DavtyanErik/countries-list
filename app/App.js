import React from 'react';
import ReactDOM from 'react-dom';
import Countries from './countries.js';
import '../public/style.css';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      countries: Countries,
    }
  }

  render() {

    const renderCountries = this.state.countries.map((currentCountry, idx) => {
      return <li key={idx}>{currentCountry.name}</li>;
    });

    return(
      <div className="main-container">
        <div className="container">
          <h1>Filtered list</h1>
        </div>
        <div className="container">
          <input placeholder="Filter..."/>
        </div>
        <div className="container">
          {renderCountries}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
