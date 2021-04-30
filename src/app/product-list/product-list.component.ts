
import { Component, OnInit } from '@angular/core';

import{ Product} from '../products';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {

    this.productService.getProductList().subscribe(products => this.products = products);
  }


  share(product) {
    const url: string = window.location.href + '/' + product.id;
    window.alert(`The product ${ product.name } has been shared!`);
    window.open(`https://telegram.me/share/url?url='+${ product.name }+here+${ product.link }`);
  }



}
