import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDeleteModalComponent } from './invoice-delete-modal.component';

describe('InvoiceDeleteModalComponent', () => {
  let component: InvoiceDeleteModalComponent;
  let fixture: ComponentFixture<InvoiceDeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceDeleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
