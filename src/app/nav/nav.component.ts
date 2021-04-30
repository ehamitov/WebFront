import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { Category } from '../categories';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategoryList().subscribe((data) => {
      this.categories = data;
    });
  }


}
