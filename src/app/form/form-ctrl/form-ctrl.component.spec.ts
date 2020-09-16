import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCtrlComponent } from './form-ctrl.component';

describe('FormCtrlComponent', () => {
  let component: FormCtrlComponent;
  let fixture: ComponentFixture<FormCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCtrlComponent ]
    })
    .compileComponents();
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
