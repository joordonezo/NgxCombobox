import { TestBed } from '@angular/core/testing';

import { NgxComboboxService } from './ngx-combobox.service';

describe('NgxComboboxService', () => {
  let service: NgxComboboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxComboboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
