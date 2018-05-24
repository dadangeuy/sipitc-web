import {Component, OnInit} from '@angular/core';
import {LabInventoryService} from '../services/lab-inventory.service';
import {Observable, of} from 'rxjs';
import {Inventory} from '../model/Inventory';

@Component({
  selector: 'app-inventaris',
  templateUrl: './inventaris.component.html',
  styleUrls: ['./inventaris.component.sass']
})
export class InventarisComponent implements OnInit {
  inventoryData$: Observable<Array<Inventory>> = of([]);

  constructor(private service: LabInventoryService) {
  }

  ngOnInit() {
  }

  selectLab(labName) {
    this.inventoryData$ = this.service.getInventory(labName);
  }
}
