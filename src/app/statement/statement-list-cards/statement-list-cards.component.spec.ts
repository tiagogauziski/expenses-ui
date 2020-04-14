import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementListCardsComponent } from './statement-list-cards.component';

describe('StatementListCardsComponent', () => {
  let component: StatementListCardsComponent;
  let fixture: ComponentFixture<StatementListCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementListCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
