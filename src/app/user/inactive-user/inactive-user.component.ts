import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  users: string[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.inActiveUsers;
  }

  setActive(index: number) {
    this.userService.setToActive(index);
  }

}
