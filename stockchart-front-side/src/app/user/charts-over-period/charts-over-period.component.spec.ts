import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsOverPeriodComponent } from './charts-over-period.component';

describe('ChartsOverPeriodComponent', () => {
  let component: ChartsOverPeriodComponent;
  let fixture: ComponentFixture<ChartsOverPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsOverPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsOverPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
