import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabInventoryService {
  private baseUrl = 'https://siri-tc.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getInventory(labName: string): Observable<Object> {
    const api = `${this.baseUrl}/laboratory/${labName}`;
    return this.http.get(api);
  }
}
