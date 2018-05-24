import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {SessionStorage} from 'ngx-store';
import {User} from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  @SessionStorage({key: 'user'}) user: User;

  constructor(private service: UserService) {
  }

  ngOnInit() {
  }

  attemptLogin(nrp, password) {
    this.service.attemptLogin(nrp, password).subscribe(value => this.user = value);
  }
}
