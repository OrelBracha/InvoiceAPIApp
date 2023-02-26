import { ComponentFixture, TestBed } from '@angular/core/testing';

import { invoiceComponent } from './invoice.component';

describe('invoiceComponent', () => {
  let component: invoiceComponent;
  let fixture: ComponentFixture<invoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ invoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(invoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
