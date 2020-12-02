import { TestBed } from '@angular/core/testing';

import { CalendarInterceptor } from './calendar.interceptor';

describe('CalendarInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CalendarInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CalendarInterceptor = TestBed.inject(CalendarInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
