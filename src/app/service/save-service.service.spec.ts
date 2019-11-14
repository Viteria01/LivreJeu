import { TestBed } from '@angular/core/testing';

import { SaveServiceService } from './save-service.service';

describe('SaveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveServiceService = TestBed.get(SaveServiceService);
    expect(service).toBeTruthy();
  });
});
