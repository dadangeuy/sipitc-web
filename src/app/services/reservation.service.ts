import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Reservation} from '../model/Reservation';
import {User} from '../model/User';
import {SessionStorage} from 'ngx-store';
import {RailsResponse} from '../model/RailsResponse';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  @SessionStorage({key: 'user'}) user: User;
  private api = 'https://siri-tc.herokuapp.com/reservation/';

  constructor(private http: HttpClient) {
  }

  submitReservation(reservation: Reservation): Observable<RailsResponse> {
    const headers = new HttpHeaders().set('Authorization', `${this.user.nrp}:${this.user.password}`);
    return this.http.post<RailsResponse>(this.api, reservation, {headers: headers});
  }
}
