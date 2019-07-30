import { TestBed } from '@angular/core/testing';

import { FriendsServiceService } from './friends-service.service';

describe('FriendsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FriendsServiceService = TestBed.get(FriendsServiceService);
    expect(service).toBeTruthy();
  });
});
