import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCompaniesOverSamePeriodChartsComponent } from './two-companies-over-same-period-charts.component';

describe('TwoCompaniesOverSamePeriodChartsComponent', () => {
  let component: TwoCompaniesOverSamePeriodChartsComponent;
  let fixture: ComponentFixture<TwoCompaniesOverSamePeriodChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoCompaniesOverSamePeriodChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCompaniesOverSamePeriodChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
