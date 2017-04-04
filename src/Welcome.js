import React from 'react';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "X"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }

  handleFormSubmit() {
    this.props.handleClick(this.state.selectedOption);
  }

  render() {
    return (
      <div className="startMenu">
        <div className="text-center">
          <h1 className="mainTitle">X&#39;s and O&#39;s</h1>
          <h3>An unbeatable tic-tac-toe game!</h3>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="radioButs">
            <div className="radio">
              <label>
                <input type="radio" value="X" checked={this.state.selectedOption === "X"} onChange={this.handleChange}/>
                X&nbsp;&nbsp;
              </label>
            </div>
            <div className="radio">
              <label>
                &nbsp;&nbsp;
                <input type="radio" value="O" checked={this.state.selectedOption === "O"} onChange={this.handleChange}/>
                O
              </label>
            </div>
          </div>
          <button className="btn btn-start" type="submit">Let&#39;s go!</button>
        </form>
        <div className="byline">
          <p>A FreeCodeCamp project by Daniel Stewart!</p>
        </div>
      </div>
    );
  }
}

export default Welcome;
