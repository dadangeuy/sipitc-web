import {Component, OnInit} from '@angular/core';
import {SessionStorage} from 'ngx-store';
import {User} from '../model/User';
import {ActivatedRoute} from '@angular/router';
import {Reservation} from '../model/Reservation';
import {ReservationService} from '../services/reservation.service';

@Component({
  selector: 'app-peminjaman',
  templateUrl: './peminjaman.component.html',
  styleUrls: ['./peminjaman.component.sass']
})
export class PeminjamanComponent implements OnInit {
  @SessionStorage({key: 'user'}) user: User;

  constructor(private route: ActivatedRoute, private service: ReservationService) {
  }

  ngOnInit() {
  }

  submitReservation(start_date: string, end_date: string, reason: string) {
    const inventory_id = this.route.snapshot.params['id'];
    const nrp = this.user.nrp;
    const reservation = new Reservation();
    reservation.inventory = inventory_id;
    reservation.nrp = nrp;
    reservation.start_date = start_date;
    reservation.end_date = end_date;
    reservation.reason = reason;
    console.log(reservation);
    this.service.submitReservation(reservation).subscribe(value => console.log(value));
  }
}
