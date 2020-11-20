import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;
  winningSquares: any[];

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(idKey: number) {
    if (!this.squares[idKey]) {
      this.squares.splice(idKey, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winningSquares = this.getWinningSquares();
    this.winner = this.squares[this.winningSquares[0]];
  }

  getWinningSquares() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return [a, b, c];
      }
    }
    return null;
  }

  changeColor() {
    for (const winningSquare in this.winningSquares) {
      if (this.squares.includes(winningSquare)) {
        
      }
    }
  }
}