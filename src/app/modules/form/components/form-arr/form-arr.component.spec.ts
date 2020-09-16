import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrComponent } from './form-arr.component';

describe('FormArrComponent', () => {
  let component: FormArrComponent;
  let fixture: ComponentFixture<FormArrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArrComponent ]
    })
    .compileComponents();
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
