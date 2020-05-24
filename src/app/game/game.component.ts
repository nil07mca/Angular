import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  listenGameEvent(number: number) {
    if (number%2 === 0) {
      this.evenNumbers.push(number);
    } else {
      this.oddNumbers.push(number);
    }
  }
}
