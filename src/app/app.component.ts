import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  hello: boolean = false;
  title = 'angularAssignment';
  users: string[] = [];
  selectedFeature: string = 'Task 01'
  onSubmit() {
    this.hello = true;
    this.users.push(this.username);
    this.username = '';
  }
  onReset() {
    this.username = '';
  }
  onNavigate(feature: string) {
     this.selectedFeature = feature;
  }
}
