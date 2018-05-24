import {Component, OnInit} from '@angular/core';
import {SessionStorage} from 'ngx-store';
import {User} from '../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @SessionStorage({key: 'user'}) user: User;

  constructor(private router: Router) {
  }

  ngOnInit() {
    const path = this.router.url;
    console.log(path);
  }

  isLoggedIn(): boolean {
    return this.user != null;
  }
}
