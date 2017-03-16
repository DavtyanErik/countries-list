import React from 'react';
import ReactDOM from 'react-dom';
import Countries from './countries.js';
import '../public/style.css';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      search: "",
      countries: Countries,
    }
  }

  changeSearch = (e) => {
    const search = e.currentTarget.value;
    this.setState({ search });
  }

  render() {

    const renderCountries = this.state.countries.map((currentCountry, idx) => {
      if (currentCountry.name.toLowerCase().includes(this.state.search.toLowerCase())
        ||
        currentCountry.code.toLowerCase().includes(this.state.search.toLowerCase())) {
        return <li key={idx}>{currentCountry.name}</li>
      }
    });

    return(
      <div className="main-container">
        <div className="container">
          <h1>Filtered list</h1>
        </div>
        <div className="container">
          <input placeholder="Filter..." onChange={this.changeSearch} />
        </div>
        <div className="container">
          {renderCountries}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
