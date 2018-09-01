import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityListComponentComponent } from './opportunity-list-component.component';

describe('OpportunityListComponentComponent', () => {
  let component: OpportunityListComponentComponent;
  let fixture: ComponentFixture<OpportunityListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
