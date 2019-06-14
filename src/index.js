import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 class Square extends React.Component {
    /*constructor(props){

    }*/

    render() {
      return (
        <button className="square">
          {this.props.number}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    generateInitialState(){
        var sqr = document.getElementsByClassName("sudoku-row");
        console.log(sqr);
    }
    
    randomlyGeneratedValue(){
        let min = 1;
        let max = 10;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    renderSquare() {
      return <Square number={this.randomlyGeneratedValue()}/>;
    }

    renderGrid() {
        var arr = [1,2,3,4,5,6,7,8,9];
        var renderGrid = arr.map(function(val){
            return <Square number={val}/>;
        })

        return renderGrid;
    }
  
    render() {
      return (
        <div className="sudoku">
            <div className="sudoku-row">
                <div className="sudoku-grid">
                    {this.renderGrid()}
                </div>
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>
            <div className="sudoku-row">
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>
            <div className="sudoku-row">
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
                <div className="sudoku-grid">
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                    {this.renderSquare()}
                </div>
            </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
            <div>{this.generateInitialState}</div>
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  