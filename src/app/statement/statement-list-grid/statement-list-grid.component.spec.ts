import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementListGridComponent } from './statement-list-grid.component';

describe('StatementListGridComponent', () => {
  let component: StatementListGridComponent;
  let fixture: ComponentFixture<StatementListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
