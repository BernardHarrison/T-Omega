import { TestBed } from '@angular/core/testing';

import { MergeFieldsService } from './merge-field-api.service';

describe('MergeFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MergeFieldsService = TestBed.get(MergeFieldsService);
    expect(service).toBeTruthy();
  });
});
