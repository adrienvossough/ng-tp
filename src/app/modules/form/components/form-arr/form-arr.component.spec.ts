import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormArrComponent } from './form-arr.component';

describe('FormArrComponent', () => {
  let component: FormArrComponent;
  let fixture: ComponentFixture<FormArrComponent>;
  let injector: TestBed;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormArrComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
    injector = getTestBed();
    formBuilder = injector.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
