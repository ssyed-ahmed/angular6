import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailCrimessolvedStatsComponent } from './hero-detail-crimessolved-stats.component';

describe('HeroDetailCrimessolvedStatsComponent', () => {
  let component: HeroDetailCrimessolvedStatsComponent;
  let fixture: ComponentFixture<HeroDetailCrimessolvedStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailCrimessolvedStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailCrimessolvedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
