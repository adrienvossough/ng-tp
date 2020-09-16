import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormCtrlComponent } from './form-ctrl.component';

describe('FormCtrlComponent', () => {
  let component: FormCtrlComponent;
  let fixture: ComponentFixture<FormCtrlComponent>;
  let injector: TestBed;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCtrlComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
    injector = getTestBed();
    formBuilder = injector.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
