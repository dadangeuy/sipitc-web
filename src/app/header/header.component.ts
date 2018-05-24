import {Component, OnInit} from '@angular/core';
import {SessionStorage} from 'ngx-store';
import {User} from '../model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @SessionStorage({key: 'user'}) user: User = null;

  constructor() {
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.user != null;
  }
}
