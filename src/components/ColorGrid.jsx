import React, { Component } from "react";
import "../index.css";

class Grid extends Component {
  constructor(props) {
    super(props);

    // Determine the number of squares for each color
    const numRed = this.getRandomInt(props.minRed, props.maxRed);
    const numBlue = this.getRandomInt(props.minBlue, props.maxBlue);
    const numGreen = this.getRandomInt(props.minGreen, props.maxGreen);
    const numYellow = this.getRandomInt(props.minYellow, props.maxYellow);

    // Calculate the total number of squares
    const totalSquares = numRed + numBlue + numGreen + numYellow;

    // Adjust the number of blue squares to ensure that the sum of all the numbers is 20
    const numBlueAdjusted = Math.min(
      numBlue + (20 - totalSquares),
      props.maxBlue
    );
    const numRedAdjusted = numRed;
    const numGreenAdjusted = numGreen;
    const numYellowAdjusted = numYellow;

    // Create an array of possible colors
    const colors = [];
    for (let i = 0; i < numRedAdjusted; i++) {
      colors.push("red");
    }
    for (let i = 0; i < numBlueAdjusted; i++) {
      colors.push("blue");
    }
    for (let i = 0; i < numGreenAdjusted; i++) {
      colors.push("green");
    }
    for (let i = 0; i < numYellowAdjusted; i++) {
      colors.push("yellow");
    }

    // Shuffle the array of colors
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    // Create the grid using the shuffled array of colors
    const grid = Array.from(Array(4), () =>
      Array.from(Array(5), () => ({
        number:
          Math.floor(Math.random() * (props.maxNumber - props.minNumber + 1)) +
          props.minNumber,
        color: colors.pop(),
      }))
    );

    // Initialize the state with the grid
    this.state = { grid };
  }

  // Function to generate a random integer between min (inclusive) and max (inclusive)
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    // Update the grid every 5 seconds
    this.interval = setInterval(() => {
      this.updateGrid();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateGrid() {
    // Determine the number of squares for each color
    const numRed = this.getRandomInt(this.props.minRed, this.props.maxRed);
    const numBlue = this.getRandomInt(this.props.minBlue, this.props.maxBlue);

    const numYellow = this.getRandomInt(
      this.props.minYellow,
      this.props.maxYellow
    );

    const numGreen = 20 - numRed - numBlue - numYellow;

    // Adjust the number of blue squares to ensure that the sum of all the numbers is 20

    const numRedAdjusted = numRed;
    const numGreenAdjusted = numGreen;
    const numYellowAdjusted = numYellow;
    const numBlueAdjusted = numBlue;

    // Create an array of possible colors
    const colors = [];
    for (let i = 0; i < numRedAdjusted; i++) {
      colors.push("red");
    }
    for (let i = 0; i < numBlueAdjusted; i++) {
      colors.push("blue");
    }
    for (let i = 0; i < numGreenAdjusted; i++) {
      colors.push("green");
    }
    for (let i = 0; i < numYellowAdjusted; i++) {
      colors.push("yellow");
    }

    // Shuffle the array of colors
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    // Calculate the sum of all the numbers in the grid
    let sum = 0;
    this.state.grid.forEach((row) =>
      row.forEach((square) => {
        sum += square.number;
      })
    );

    // Update the color and number of each square in the grid
    const grid = this.state.grid.map((row) =>
      row.map((square) => {
        let newNumber =
          Math.floor(
            Math.random() * (this.props.maxNumber - this.props.minNumber + 1)
          ) + this.props.minNumber;

        // Adjust the number of the blue squares to ensure that the sum of all the numbers is 20
        if (square.color === "blue") {
          const totalBlueNumbers = row
            .filter((s) => s.color === "blue")
            .reduce((acc, s) => acc + s.number, 0);
          newNumber = Math.min(20 - sum + square.number, this.props.maxNumber);
        }

        sum += newNumber - square.number;

        return {
          ...square,
          color: colors.pop(),
          number: newNumber,
        };
      })
    );

    // Update the state with the new grid
    this.setState({ grid });
  }

  render() {
    const { grid } = this.state;
    // Create an array of div elements for each square in the grid
    const gridSquares = grid.map((row, rowIndex) =>
      row.map((square, squareIndex) => (
        <div
          className={`grid-square ${square.color}`}
          key={`${rowIndex}-${squareIndex}`}
        >
          {square.color === "green"
            ? "WR"
            : square.color === "red"
            ? "QB"
            : square.color === "yellow"
            ? "TE"
            : square.color === "blue"
            ? "RB"
            : null}
        </div>
      ))
    );

    return <div className="grid">{gridSquares}</div>;
  }
}

export default Grid;
