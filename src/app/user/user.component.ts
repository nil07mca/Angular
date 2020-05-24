import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() usersList: string[] = [];
  // activeUsers: string[] = this.usersList;
  // inActiveUsers: string[] = this.usersList;
  constructor() { }

  ngOnInit(): void {
  }

}
