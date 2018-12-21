import React from "react";
import Square from './square';
// import ActiveRobot from './activeRobot'; 

export default class Board extends React.Component {
  renderSquare(key, cell) {
      console.log(cell);
    let className = '';
    if(cell.left === 1) {
      className += ' left';
    }
    if(cell.right === 1) {
        className += ' right';
    }

    if(cell.top === 1) {
        className += ' top';
    }

    if(cell.bottom === 1) {
        className += ' bottom';
    }
    if(cell.value === 'T') {
        className += ' target';
    }
    if(cell.value === 'R') {
        className += ' activeRobot';
    }
    return <Square key={key} classes={className} />;
  }
  createBoardArray(rows, columns) {
    let arrBoard = [];
    for(let i = 0; i < rows; i++) {
        let arrRow = [];
        for(let k = 0; k < columns; k++) {
            let cell = {
                "left": 0,
                "top": 0,
                "right": 0,
                "bottom": 0,
                "value": 0,
            };
        
            if(i === 0) {
                cell.bottom = 1;
            }
            if(k === 0) {
                cell.left = 1;
            }
            if(k === columns - 1) {
                cell.right = 1;
            }
            if(i === rows- 1) {
                cell.top = 1;
            }
           arrRow.push(cell);
        }
        arrBoard.push(arrRow);
    }
    return arrBoard;
  }

  createVisualBoard(arrBoard){
    let visualBoard = [];
    for(let row = 0; row < arrBoard.length; row++) {
       visualBoard.unshift(this.createVisualRow(arrBoard[row], row)); 
    }
    return(
        <div className="board">
          {visualBoard}
        </div>
    )
  }
  createVisualRow(arrRow, currentRow){
    let arrVisualRow = [];
    for(let column = 0; column < arrRow.length; column++) {
        let key = column + currentRow * column;
        arrVisualRow.push(this.renderSquare(key, arrRow[column]));
    }
    return (
      <div className="board-row" key={currentRow}>
        {arrVisualRow}
      </div>
    )
  }
  setStartingBoardLocation(board) {
    board[0][0].value = 'R';
    board[this.props.rows - 1][this.props.columns - 1].value = 'T';
  }
  render() {
    //we will follow process where we update the board array, and then trigger an update of the visual board;
    // let ActiveRobot = new ActiveRobot();
    // let startingLocation = ActiveRobot.setLocation();
    // console.log(startingLocation);

    let board = this.createBoardArray(this.props.rows, this.props.columns);  
    this.setStartingBoardLocation(board);
    let visualBoard = this.createVisualBoard(board);
    console.log(board);
    return (
      <div>
            {visualBoard}
        </div>
    );
  }
}



// ========================================
