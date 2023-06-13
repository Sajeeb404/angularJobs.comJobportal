import { TestBed } from '@angular/core/testing';

import { RegiFormService } from './regi-form.service';

describe('RegiFormService', () => {
  let service: RegiFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegiFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
