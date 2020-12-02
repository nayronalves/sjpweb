import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService, AuthenticationService } from '../../services';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homesys',
  templateUrl: './homesys.component.html',
  styleUrls: ['./homesys.component.scss']
})
export class HomesysComponent implements OnInit {
  loading = false;
  users: User[];
  currentUser: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { 
      this.currentUser = this.authenticationService.currentUserValue;
    }

  ngOnInit(): void {
    this.loading = true;
    console.log(this.authenticationService.currentUser);
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   this.loading = false;
    //   this.users = users;
    // });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}

}
