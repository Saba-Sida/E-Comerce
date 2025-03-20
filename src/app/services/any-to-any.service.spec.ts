import { TestBed } from '@angular/core/testing';

import { AnyToAnyService } from './any-to-any.service';

describe('AnyToAnyService', () => {
  let service: AnyToAnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnyToAnyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
