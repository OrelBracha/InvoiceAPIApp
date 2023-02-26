import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinvoiceComponent } from './show-invoice.component';

describe('ShowinvoiceComponent', () => {
  let component: ShowinvoiceComponent;
  let fixture: ComponentFixture<ShowinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
