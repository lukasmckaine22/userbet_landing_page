import React, { Component } from 'react';

class Rectangle extends Component {
  constructor(props) {
    super(props);

    // Initialize the state with a 4x2 rectangle of squares
    this.state = {
      rectangle: [
        ['QB', 'RB', 'WR', 'TE'],
        [2, 4, 5, 3],
      ],
    };
  }

  // Function to generate a random integer between min (inclusive) and max (inclusive)
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to update the bottom row of squares with random numbers
  updateBottomRow() {
    const { rectangle } = this.state;
    const newRectangle = [...rectangle];
    for (let i = 0; i < newRectangle[1].length; i++) {
      // Generate a random number between 2 and 6
      const newNumber = this.getRandomInt(2, 6);
  
      // If the new number is different from the current number, add the "flip" class to the square
      if (newNumber !== newRectangle[1][i]) {
        newRectangle[1][i] = newNumber;
        const squareElement = document.getElementById(`bottom-square-${i}`);
        if (squareElement) {
          squareElement.classList.remove('flip');
          setTimeout(() => {
            squareElement.classList.add('flip');
          }, 10);
        }
      }
    }
    this.setState({ rectangle: newRectangle });
  }
  

  componentDidMount() {
    // Update the bottom row of squares with random numbers every 5 seconds
    this.interval = setInterval(() => {
      this.updateBottomRow();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { rectangle } = this.state;

    // Create an array of div elements for each row and square in the rectangle
    const rectangleDivs = rectangle.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((square, squareIndex) => {
            const isQBSquare = rowIndex === 0 && squareIndex === 0;
            const isRBSquare = rowIndex === 0 && squareIndex === 1;
            const isWRSquare = rowIndex === 0 && squareIndex === 2;
            const isTESquare = rowIndex === 0 && squareIndex === 3;
            const isBottomLeftSquare = rowIndex === 1 && squareIndex === 0;
            const isBottomMiddleSquare = rowIndex === 1 && (squareIndex === 1 || squareIndex === 2);
            const isBottomRightSquare = rowIndex === 1 && squareIndex === 3;

            

            const squareClass = isQBSquare ? 'qb-square' : isRBSquare ? 'rb-square' :isWRSquare ? 'wr-square' : 
                    isTESquare ? 'te-square' : isBottomLeftSquare ? 'bottom-left-square' : isBottomMiddleSquare? 'bottom-middle-square' : isBottomRightSquare? 'bottom-right-square': 'bottom-square';
            return (
              <div className={squareClass} key={squareIndex}>
                {square}
              </div>
            );
          })}
        </div>
      ));
      

    return <div className="rectangle">{rectangleDivs}</div>;
  }
}

export default Rectangle;
