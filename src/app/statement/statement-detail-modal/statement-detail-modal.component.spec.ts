import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementDetailModalComponent } from './statement-detail-modal.component';

describe('StatementDetailModalComponent', () => {
  let component: StatementDetailModalComponent;
  let fixture: ComponentFixture<StatementDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
