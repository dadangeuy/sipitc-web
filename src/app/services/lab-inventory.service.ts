import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {RailsResponse} from '../model/RailsResponse';
import {Inventory} from '../model/Inventory';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabInventoryService {
  private api = 'https://siri-tc.herokuapp.com/laboratory';

  constructor(private http: HttpClient) {
  }

  getInventory(labName: string): Observable<Inventory[]> {
    const url = `${this.api}/${labName}`;
    return this.http.get<RailsResponse>(url).pipe(
      map(value => {
        return value.body;
      })
    );
  }
}
