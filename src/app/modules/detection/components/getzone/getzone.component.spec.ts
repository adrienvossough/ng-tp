import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetzoneComponent } from './getzone.component';

describe('GetzoneComponent', () => {
  let component: GetzoneComponent;
  let fixture: ComponentFixture<GetzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
