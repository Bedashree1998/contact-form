import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactScreenComponent } from './add-contact-screen.component';

describe('AddContactScreenComponent', () => {
  let component: AddContactScreenComponent;
  let fixture: ComponentFixture<AddContactScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContactScreenComponent]
    });
    fixture = TestBed.createComponent(AddContactScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
