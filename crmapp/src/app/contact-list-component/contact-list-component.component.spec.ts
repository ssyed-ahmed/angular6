import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponentComponent } from './contact-list-component.component';

describe('ContactListComponentComponent', () => {
  let component: ContactListComponentComponent;
  let fixture: ComponentFixture<ContactListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
