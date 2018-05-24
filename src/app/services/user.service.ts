import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RailsResponse} from '../model/RailsResponse';
import {User} from '../model/User';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'https://siri-tc.herokuapp.com/user';

  constructor(private http: HttpClient) {
  }

  attemptLogin(nrp: string, password: string): Observable<User> {
    const url = `${this.api}/${nrp}`;
    const auth = `${nrp}:${password}`;
    const headers = new HttpHeaders().set('Authorization', auth);
    return this.http
      .get<RailsResponse>(url, {headers: headers})
      .pipe(map(value => value.body));
  }
}
