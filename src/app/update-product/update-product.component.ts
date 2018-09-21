import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient) { }
  product;
  name;
  price;
  description;

  ngOnInit() {
    console.log(sessionStorage.getItem('product'))
    this.product = JSON.parse(sessionStorage.getItem('product'))
    this.name = this.product.name
    this.price = this.product.price
    this.description = this.product.description

    console.log(this.name)
  }
  update() {
    this.http.get("update?id=" + this.product._id + "&name=" + this.name + "&price=" + this.price + "&description=" + this.description).subscribe(res => {
      console.log(this.name + " " + this.price + " " + this.description)
      var x = JSON.parse(JSON.stringify(res))
      this.router.navigateByUrl("products")
    });
  }
}
