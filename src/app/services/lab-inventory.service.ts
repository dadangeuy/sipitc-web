import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabInventoryService {
  private api = 'https://siri-tc.herokuapp.com/laboratory';

  constructor(private http: HttpClient) {
  }

  getInventory(labName: string): Observable<Object> {
    const url = `${this.api}/${labName}`;
    return this.http.get(url);
  }
}
