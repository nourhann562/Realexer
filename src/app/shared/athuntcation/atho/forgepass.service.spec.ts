import { TestBed } from '@angular/core/testing';

import { ForgepassService } from './forgepass.service';

describe('ForgepassService', () => {
  let service: ForgepassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgepassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
