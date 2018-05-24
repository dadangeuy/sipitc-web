import {Component, OnInit} from '@angular/core';
import {SessionStorage} from 'ngx-store';
import {User} from '../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {
  @SessionStorage({key: 'user'}) user: User;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.user = null;
    this.router.navigate(['login']);
    this.user = null;
  }

}
