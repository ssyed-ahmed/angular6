import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailStatsComponent } from './hero-detail-stats.component';

describe('HeroDetailStatsComponent', () => {
  let component: HeroDetailStatsComponent;
  let fixture: ComponentFixture<HeroDetailStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
