import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PRODUCTS } from '../../mocks/products.mock';
import { ProductService } from '../../services/product.service';

import { AsyncPipeComponent } from './async-pipe.component';

describe('AppComponent', () => {
  const spyProductService = jasmine.createSpyObj('productService', ['list']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        AsyncPipeComponent
      ],
      providers: [
        {
          provide: ProductService,
          useValue: spyProductService
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app and get component instance', () => {
    const fixture = TestBed.createComponent(AsyncPipeComponent);
    const plist = fixture.debugElement.componentInstance;
    expect(plist).toBeTruthy();
  });

  it('should initialize products', () => {
    // comp instance
    const fixture = TestBed.createComponent(AsyncPipeComponent);
    const plist = fixture.debugElement.componentInstance;
    // list() call
    spyProductService.list.and.returnValue(of(PRODUCTS));
    // call method
    plist.loadWithResourcePatternService();
    // check result
    plist.products$.subscribe((r) => {
      expect(r).toEqual(PRODUCTS);
    });
  });


});