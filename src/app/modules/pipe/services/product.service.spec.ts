import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { PRODUCTS } from '../mocks/products.mock';

describe('Event Service tests', () => {
    let injector: TestBed;
    let httpTestingController: HttpTestingController;
    let productService: ProductService;

    beforeEach(async () => {
        // fake module / sandbox module
        TestBed.configureTestingModule({
            imports: [
                // HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [
                // unknow markup
                ProductService
            ]
        }).compileComponents();
        injector = getTestBed();
        httpTestingController = injector.inject(HttpTestingController);
        productService = injector.inject(ProductService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    // check service instance
    it('should inject service',
        inject([ProductService], (service) => {
            expect(service).toBeTruthy();
        })
    );

    // check service instance
    it('should inject service from variable', () => {
        expect(productService).toBeTruthy();
    });

    // check component instance
    it('should get values', () => {

        // do request
        productService.list().subscribe((data) => {
            // check data
            expect(data).toEqual(PRODUCTS);

        });
        const req = httpTestingController.expectOne('http://localhost:3000/products')
        expect(req.request.method).toBe('GET');
        req.flush(PRODUCTS);
    }
    );


});
