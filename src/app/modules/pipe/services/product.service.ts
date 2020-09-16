import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResourceService } from '../../api/resource.service';
import { Product } from '../models/products';

@Injectable({
    providedIn: 'root'
})
export class ProductService extends ResourceService<number, Product> {
    constructor(private http: HttpClient) {
        super(http, 'products');
    }
}