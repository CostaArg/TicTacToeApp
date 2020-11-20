import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
<button [ngClass]="{'btn': true, 'btn-primary': true, 'btn-success' : value === 'X', 'btn-danger' : value === 'O'}">{{value}}</button>
<!-- , 'btn-success' : winningSquares.includes() -->
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; border-radius: 0; }']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';
  @Input() winningSquares: any[];
}