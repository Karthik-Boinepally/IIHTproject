import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSectorOverDifferentPeriodChartsComponent } from './single-sector-over-different-period-charts.component';

describe('SingleSectorOverDifferentPeriodChartsComponent', () => {
  let component: SingleSectorOverDifferentPeriodChartsComponent;
  let fixture: ComponentFixture<SingleSectorOverDifferentPeriodChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSectorOverDifferentPeriodChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSectorOverDifferentPeriodChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
