import {Component, OnInit} from '@angular/core';

import {ProductService} from "../product.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  logged = false;
  username = '';
  password = '';

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  constructor(private productService: ProductService) {
  }

  login() {
    this.productService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }


}
