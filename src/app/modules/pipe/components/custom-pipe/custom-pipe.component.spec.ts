import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetCharPipe } from 'src/app/pipes/getchar.pipe';

import { CustomPipeComponent } from './custom-pipe.component';

describe('CustomPipeComponent', () => {
  let component: CustomPipeComponent;
  let fixture: ComponentFixture<CustomPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomPipeComponent, GetCharPipe]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
