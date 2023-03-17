import { TestBed } from '@angular/core/testing';

import { VocabularService } from './vocabular.service';

describe('VocabularService', () => {
  let service: VocabularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
