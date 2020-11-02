import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersSubscrition: Subscription;
  users$: Observable<any[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

}
