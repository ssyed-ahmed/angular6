import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadListComponentComponent } from './lead-list-component.component';

describe('LeadListComponentComponent', () => {
  let component: LeadListComponentComponent;
  let fixture: ComponentFixture<LeadListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
