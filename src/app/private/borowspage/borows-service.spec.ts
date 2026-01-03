import { TestBed } from '@angular/core/testing';

import { BorowsService } from './borows-service';

describe('BorowsService', () => {
  let service: BorowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
