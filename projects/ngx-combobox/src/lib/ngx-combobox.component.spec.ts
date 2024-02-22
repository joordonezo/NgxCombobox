import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxComboboxComponent } from './ngx-combobox.component';

describe('NgxComboboxComponent', () => {
  let component: NgxComboboxComponent;
  let fixture: ComponentFixture<NgxComboboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxComboboxComponent]
    });
    fixture = TestBed.createComponent(NgxComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
