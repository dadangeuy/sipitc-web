import {inject, TestBed} from '@angular/core/testing';

import {LabInventoryService} from './lab-inventory.service';

describe('LabInventoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabInventoryService]
    });
  });

  it('should be created', inject([LabInventoryService], (service: LabInventoryService) => {
    expect(service).toBeTruthy();
  }));
});
