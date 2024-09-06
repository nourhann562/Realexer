import { TestBed } from '@angular/core/testing';

import { ShopingaddService } from './shopingadd.service';

describe('ShopingaddService', () => {
  let service: ShopingaddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingaddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
