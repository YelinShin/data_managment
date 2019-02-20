import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerComponent } from './drinkers.component';

describe('DrinkersComponent', () => {
  let component: DrinkerComponent;
  let fixture: ComponentFixture<DrinkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
