import { Component } from '@angular/core';
import { User } from './models/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CalendarOptions } from '@fullcalendar/angular';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sjpwebapp';
  currentUser: User;
  route: string;
  location: Location;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
  ) {
      // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      // console.log(location.pathname, this.noSys())
  }

  login() {
    if (this.router.url == '/login') return true;
  }

  // noSys(){
  //   if (location.pathname == '/homesys' || '/login') {
  //     return false;
  //   }
  // }

  // logout() {
  //     this.authenticationService.logout();
  //     this.router.navigate(['/login']);
  // }
}
