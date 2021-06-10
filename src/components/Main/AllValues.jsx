import React from "react";
import Calc from "./Calc";

class AllValues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date(),
      currencyRate: {},
    };
    this.currency = ["USD", "RUB", "CAD", "PHP", "UAH"];
    this.getRate();
  }

  getRate = () => {
    fetch(
      "https://v6.exchangerate-api.com/v6/32bf61e4be0fa2d9c249035d/latest/EUR"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.conversion_rates[this.currency[i]];
        }
        console.log(result);
        this.setState({ currencyRate: result });
      });
  };

  render() {
    return (
      <>
        <div className="valMain_values">
          <h2>Курс валют на {this.state.date}</h2>
          <div className="valMain_desc">
            {Object.keys(this.state.currencyRate).map((keyName, i) => (
              <div className="valMain_value" key={keyName}>
                <h3>{keyName}</h3>
                <p>{this.state.currencyRate[keyName].toFixed(2)}</p>
                <p>* за 1 EUR</p>
              </div>
            ))}
          </div>
        </div>
        <Calc rate={this.state.currencyRate}/>
      </>
    );
  }
}

export default AllValues;
