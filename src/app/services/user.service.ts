import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'https://siri-tc.herokuapp.com/user';

  // private api = '192.168.1.7:3000/user';

  constructor(private http: HttpClient) {
  }

  attemptLogin(nrp: string, password: string): Observable<User> {
    // const url = `${this.api}/${nrp}`;
    // const headers = new HttpHeaders();
    // const auth = `${nrp}:${password}`;
    // return this.http.get<RailsResponse>(url, { headers: headers });
    return of(this.dummyUser(nrp, password));
  }

  private dummyUser(nrp: string, password: string) {
    const user = new User();
    user.nrp = nrp;
    user.password = password;
    user.email = 'dummy@gmail.com';
    user.phone_number = '087771823571';
    user.name = 'pisjo';
    return user;
  }
}
