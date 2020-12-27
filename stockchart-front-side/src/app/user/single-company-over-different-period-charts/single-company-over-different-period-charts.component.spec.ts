import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyOverDifferentPeriodChartsComponent } from './single-company-over-different-period-charts.component';

describe('SingleCompanyOverDifferentPeriodChartsComponent', () => {
  let component: SingleCompanyOverDifferentPeriodChartsComponent;
  let fixture: ComponentFixture<SingleCompanyOverDifferentPeriodChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyOverDifferentPeriodChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyOverDifferentPeriodChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
