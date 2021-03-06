import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';
import { Location } from '@angular/common';
import {Category} from '../categories';
import {Product} from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: Product[] ;
  categories: Category[];
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getProductsByCategory();
  }
  getId(): void{
    this.id = +this.route.snapshot.paramMap.get('category_id');
  }
  getProductsByCategory(): void{
    this.categoryService.getCategoryProductList(this.id).subscribe(products => this.products = products);
  }



}
