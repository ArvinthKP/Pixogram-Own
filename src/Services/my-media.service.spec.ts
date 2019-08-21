import { TestBed } from '@angular/core/testing';

import { MyMediaService } from './my-media.service';

describe('MyMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyMediaService = TestBed.get(MyMediaService);
    expect(service).toBeTruthy();
  });
});
