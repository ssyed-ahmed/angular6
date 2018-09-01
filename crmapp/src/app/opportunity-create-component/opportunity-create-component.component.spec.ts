import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityCreateComponentComponent } from './opportunity-create-component.component';

describe('OpportunityCreateComponentComponent', () => {
  let component: OpportunityCreateComponentComponent;
  let fixture: ComponentFixture<OpportunityCreateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityCreateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
