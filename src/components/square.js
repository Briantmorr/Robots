import React from 'react';

export default class Square extends React.Component {
  render() {
    let className = "square";
    className += this.props.classes;
    return (
      <button className={className}>
        {/* TODO */}
      </button>
    );
  }
}

