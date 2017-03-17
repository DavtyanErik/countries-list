import React from 'react';
import ReactDOM from 'react-dom';
import Countries from './countries.js';
import '../public/style.css';

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      search: ""
    }
  }

  changeSearch = (e) => {
    const search = e.currentTarget.value.toLowerCase();
    this.setState({ search });
  }

  render() {

    const renderCountries = Countries.map((country, idx) => {
      const {name, code} = country;
      const {search} = this.state;
      if (name.toLowerCase().includes(search) || code.toLowerCase().includes(search)) {
        return <div className="country-element" key={idx}>{name}</div>;
      }
    });

    return(
      <div className="main-container">
        <div className="container title">
          Filtered list
        </div>
        <input className="container search-field" placeholder="Filter..." onChange={this.changeSearch} />
        <div className="container list">
          {renderCountries}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
