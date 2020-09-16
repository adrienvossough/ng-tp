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
    // this.loadWithShareReplayAsync();
    // this.loadWithShareReplaySubscribe();
  }

  loadWithResourcePatternService() {
    // async
    this.products$ = this.productService.list();
    console.log(this.products$)
  }


  loadWithShareReplayAsync() {
    this.productsShareReplay$ = this.productService.list().pipe(
      shareReplay(1)
    );

    this.productsExpensiveShareReplay$ = this.productsShareReplay$.pipe(
      map(products => products.filter(p => p.price >= 10))
    );

    this.productsExpensiveShareReplay$ = this.productsShareReplay$.pipe(
      map(products => products.filter(p => p.price <= 10))
    );
  }

  loadWithShareReplaySubscribe() {
    const productsReplay = this.productService.list().pipe(
      shareReplay(1)
    );

    const productsExpensiveReplay = productsReplay.pipe(
      map(products => products.filter(p => p.price >= 10))
    );

    const productsCheapReplay = productsReplay.pipe(
      map(products => products.filter(p => p.price <= 10))
    );

    productsReplay.subscribe((r) => console.log(r));
    productsExpensiveReplay.subscribe((r) => console.log(r));
    productsCheapReplay.subscribe((r) => console.log(r));
  }


}

