import React from 'react';

class App extends React.Component {
  state = {
    form: {
      description: 'something',
      value: 1200,
      sign: '+',
    },
    budget: 0,
    incomesArr: [],
    expensesArr: [],
  };

  onSelectChange = e => {
    this.setState({ form: { sign: e.target[e.target.selectedIndex].text } });
  };

  onFormSubmit = e => {
    e.preventDefault();

    const obj = {
      description: this.state.form.description,
      value: this.state.form.value,
    };

    if (this.state.form.sign === '+')
      this.setState({
        budget: this.state.budget + this.state.form.value,
        incomesArr: [...this.state.incomesArr, obj],
      });
    if (this.state.form.sign === '-')
      this.setState({
        budget: this.state.budget - this.state.form.value,
        expensesArr: [...this.state.expensesArr, obj],
      });
  };

  onInputChange = e => {
    if (e.target.type === 'text')
      this.setState({ form: { description: e.target.value } });
    else this.setState({ form: { value: parseInt(e.target.value) } });
  };

  render() {
    return (
      <div>
        <div>
          <div>{this.state.budget}</div>
          <div>
            <p>income:</p>
            <p>expences:</p>
          </div>
          <form onSubmit={this.onFormSubmit}>
            <select onChange={this.onSelectChange}>
              <option value="+">+</option>
              <option value="-">- </option>
            </select>
            <input
              placeholder="Add description"
              type="text"
              value={this.state.form.description}
              onChange={this.onInputChange}></input>
            <input
              placeholder="Value"
              type="number"
              value={this.state.form.value}
              onChange={this.onInputChange}></input>
            <input type="submit"></input>
          </form>
          <ul style={{ float: 'left' }}>
            {this.state.incomesArr.map(i => (
              <li>
                {i.description} {i.value}
              </li>
            ))}
          </ul>
          <ul style={{ float: 'right' }}>
            {this.state.expensesArr.map(e => (
              <li>
                {e.description} {e.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
