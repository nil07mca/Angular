import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task01',
  templateUrl: './task01.component.html',
  styleUrls: ['./task01.component.css']
})
export class Task01Component implements OnInit {
  showSuccess: boolean = false;
  showWarning: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClickShowSuccess() {
    this.showSuccess = true;
  }

  onClickShowWarning() {
    this.showWarning = true;
  }

  onClickHideAll() {
    this.showSuccess = false;
    this.showWarning = false;
  }

}
