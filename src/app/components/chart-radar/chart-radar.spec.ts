import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRadar } from './chart-radar';

describe('ChartRadar', () => {
  let component: ChartRadar;
  let fixture: ComponentFixture<ChartRadar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRadar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartRadar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
