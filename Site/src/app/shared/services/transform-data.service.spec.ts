import { TestBed } from '@angular/core/testing';

import { TransformDataService } from './transform-data.service';

describe('TransformDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransformDataService = TestBed.get(TransformDataService);
    expect(service).toBeTruthy();
  });
});
