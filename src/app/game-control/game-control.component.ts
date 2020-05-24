import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameEvent = new EventEmitter<number>();
  id: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  emitEvent() {
    const randomNumber = Math.floor((Math.random() * 10) + 1);
    this.gameEvent.emit(randomNumber);
    
  }
  onStart() {
    this.id = setInterval(() => {
      this.emitEvent(); 
    }, 1000);
  }
  onStop() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
