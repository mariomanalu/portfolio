import React from "react";
import ReactDOM from "react-dom";
import logo from "/src/logo.svg";
console.log(logo);
import App from "./App";

class CompanyCard extends React.Component {
  render() {
    return (

    <div class="container">
      <div class="logo">
        <img src="logo" alt = "logo"/>
        </div>
      <div class="stock-name">
        <h3>{this.props.company}
        <div class="horizontal-center">
        ({this.props.stock})
        </div>
        </h3>
        </div>
      <div class="horizontal-center">
        <h2>{this.props.valuation}</h2>
      </div>
      </div>
    );
  }
}

ReactDOM.render(<CompanyCard valuation="$50000" company="Apple Inc." stock="AAPL"/>, document.getElementById('root'));
