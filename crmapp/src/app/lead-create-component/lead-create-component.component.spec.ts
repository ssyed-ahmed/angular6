import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadCreateComponentComponent } from './lead-create-component.component';

describe('LeadCreateComponentComponent', () => {
  let component: LeadCreateComponentComponent;
  let fixture: ComponentFixture<LeadCreateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadCreateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
