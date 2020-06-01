import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task05',
  templateUrl: './task05.component.html',
  styleUrls: ['./task05.component.css']
})
export class Task05Component implements OnInit {
  files = [
    {name: 'logo.svg', size: 2120109, type: 'image/svg' },
    {name: 'banner.jpg', size: 18029, type: 'image/jpg' },
    {name: 'background.png', size: 178456267876, type: 'image/png' }
    ];
    
  constructor() { }

  ngOnInit(): void {
  }

}
