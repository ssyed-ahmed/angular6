import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateComponentComponent } from './contact-create-component.component';

describe('ContactCreateComponentComponent', () => {
  let component: ContactCreateComponentComponent;
  let fixture: ComponentFixture<ContactCreateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCreateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
