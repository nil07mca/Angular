import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task03',
  templateUrl: './task03.component.html',
  styleUrls: ['./task03.component.css']
})
export class Task03Component implements OnInit {
  username: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
   this.username = '';
  }
  onReset() {
    this.username = '';
  }
}
