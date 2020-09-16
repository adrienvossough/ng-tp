import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { shareReplay, filter, map } from 'rxjs/operators';
import { Product } from '../../models/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.css']
})
export class AsyncPipeComponent implements OnInit {
  products: Product[] = new Array();
  products$: Observable<Product[]>;
  productSub: Subscription;
  productsShareReplay$: Observable<Product[]>;
  productsExpensiveShareReplay$: Observable<Product[]>;
  productsCheapShareReplay$: Observable<Product[]>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadWithResourcePatternService();
    this.loadWithShareReplayAsync();
  }

  loadWithResourcePatternService(): void {
    // async
    this.products$ = this.productService.list();
  }


  loadWithShareReplayAsync(): void {
    this.productsShareReplay$ = this.productService.list().pipe(
      shareReplay(1)
    );

    this.productsExpensiveShareReplay$ = this.productsShareReplay$.pipe(
      map(products => products.filter(p => p.price >= 10))
    );

    this.productsCheapShareReplay$ = this.productsShareReplay$.pipe(
      map(products => products.filter(p => p.price <= 10))
    );
  }
}

