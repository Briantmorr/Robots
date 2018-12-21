import React from 'react';
import Board from './board';

export default class Game extends React.Component {
  render() {
    const rows = 9;
    const columns = 9;
    return (
      <div className="game">
        <div className="game-board">
              <Board columns={columns} rows={rows} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}