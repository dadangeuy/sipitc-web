import {Component, OnInit} from '@angular/core';
import {LabInventoryService} from '../services/lab-inventory.service';

@Component({
  selector: 'app-inventaris',
  templateUrl: './inventaris.component.html',
  styleUrls: ['./inventaris.component.sass']
})
export class InventarisComponent implements OnInit {

  constructor(private service: LabInventoryService) {
  }

  ngOnInit() {
    const inventory = this.service.getInventory('KCV');
    console.log('halaman');
    inventory.subscribe(value => {
      console.log(value);
    });
  }

}
