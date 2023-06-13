import { TestBed } from '@angular/core/testing';

import { LoginFormService } from './post.service';

describe('PostService', () => {
  let service: LoginFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
