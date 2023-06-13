import { TestBed } from '@angular/core/testing';

import { TestRegiServiceService } from './test-regi-service.service';

describe('TestRegiServiceService', () => {
  let service: TestRegiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestRegiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
