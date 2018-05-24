import {Component, OnInit} from '@angular/core';
import {User} from '../model/User';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(private service: UserService) {
  }

  ngOnInit() {
  }

  attemptRegister(nrp: string, name: string, email: string, phone: string, password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      const user = new User();
      user.nrp = nrp;
      user.name = name;
      user.email = email;
      user.phone_number = phone;
      user.password = password;
      this.service.attemptRegister(user).subscribe(value => {
        console.log(value);
      });
    }
  }
}
