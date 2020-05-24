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
    Task03Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
