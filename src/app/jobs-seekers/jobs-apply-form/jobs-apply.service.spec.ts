import { TestBed } from '@angular/core/testing';

import { JobsApplyService } from './jobs-apply.service';

describe('JobsApplyService', () => {
  let service: JobsApplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobsApplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
