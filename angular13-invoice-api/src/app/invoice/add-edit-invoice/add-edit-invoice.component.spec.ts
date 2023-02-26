import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditinvoiceComponent } from './add-edit-invoice.component';

describe('AddEditinvoiceComponent', () => {
  let component: AddEditinvoiceComponent;
  let fixture: ComponentFixture<AddEditinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
