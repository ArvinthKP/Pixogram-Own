import { TestBed } from '@angular/core/testing';

import { FollowServiceService } from './follow-service.service';

describe('FollowServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FollowServiceService = TestBed.get(FollowServiceService);
    expect(service).toBeTruthy();
  });
});
