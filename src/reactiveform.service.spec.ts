import { TestBed, inject } from '@angular/core/testing';

import { ReactiveformService } from './reactiveform.service';

describe('ReactiveformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiveformService]
    });
  });

  it('should be created', inject([ReactiveformService], (service: ReactiveformService) => {
    expect(service).toBeTruthy();
  }));
});
