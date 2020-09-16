import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { FormBuildComponent } from './form-build.component';

describe('FormBuildComponent', () => {
  let component: FormBuildComponent;
  let fixture: ComponentFixture<FormBuildComponent>;
  let injector: TestBed;
  let formBuilder: FormBuilder;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBuildComponent],
      providers: [FormBuilder]
    })
      .compileComponents();
    injector = getTestBed();
    formBuilder = injector.inject(FormBuilder);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
