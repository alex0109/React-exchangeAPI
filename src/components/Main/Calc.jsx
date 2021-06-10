import React from "react";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0
    };
  }

  static getDerivedStateFromProps(props, state) {
        return {rate: props.rate};
  }

  calcRate = (e) => {
      e.preventDefault();
      let elements = e.target.elements;
      console.log(elements['type-currency']);
      let countCurrency = elements['count-currency'].value;
      let typeCurrency = elements['type-currency'].value;
      this.setState({ result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)});
  }

  render() {
    return (
      <div className="valMain_calc">
        <h2 className="valMain_title">Калькулятор обмена</h2>
        <div className="valMain_calcBlock">
          <p>Я хочу</p>
          <div className="valMain_select">
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency"/>
              <select name="type-currency">
                {Object.keys(this.props.rate).map((keyName, i) => (
                  <option key={keyName} value={keyName}>
                    {keyName}
                  </option>
                ))}
              </select>
              <input type="submit" defaultValue="calc" />
            </form>
          </div>
          <div className="valMain_result">
            <h4 className="valMain_subtitle">Результат</h4>
            <ul className="valMain_list">
              <li className="valMain_item">EUR {this.state.result}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
