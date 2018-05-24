import {Component, OnInit} from '@angular/core';
import {SessionStorage} from 'ngx-store';
import {User} from '../../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass']
})
export class HeaderMenuComponent implements OnInit {
  @SessionStorage({key: 'user'}) user: User;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
