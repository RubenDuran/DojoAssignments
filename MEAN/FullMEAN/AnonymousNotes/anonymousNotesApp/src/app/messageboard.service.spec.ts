import { TestBed, inject } from '@angular/core/testing';

import { MessageboardService } from './messageboard.service';

describe('MessageboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageboardService]
    });
  });

  it('should be created', inject([MessageboardService], (service: MessageboardService) => {
    expect(service).toBeTruthy();
  }));
});
