import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './shared/alert/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './shared/alert/success-alert/success-alert.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameComponent } from './game/game.component';
import { ActiveUserComponent } from './user/active-user/active-user.component';
import { UserComponent } from './user/user.component';
import { InactiveUserComponent } from './user/inactive-user/inactive-user.component';
import { GlobalHeaderComponent } from './shared/global-header/global-header.component';
import { Task01Component } from './task01/task01.component';
import { Task02Component } from './task02/task02.component';
import { Task03Component } from './task03/task03.component';
import { Task04Component } from './task04/task04.component';
import { Routes, RouterModule } from '@angular/router';
import { FileSizePipe } from './file-size.pipe';
import { Task05Component } from './task05/task05.component';

const appRoutes: Routes = [
  { path: '', component: Task01Component },
  { path: 'task01', component: Task01Component },
  { path: 'task02', component: Task02Component },
  { path: 'task03', component: Task03Component },
  { path: 'task04', component: Task04Component },
  { path: 'task05', component: Task05Component }
]

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    GameComponent,
    ActiveUserComponent,
    UserComponent,
    InactiveUserComponent,
    GlobalHeaderComponent,
    Task01Component,
    Task02Component,
    Task03Component,
    Task04Component,
    FileSizePipe,
    Task05Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
