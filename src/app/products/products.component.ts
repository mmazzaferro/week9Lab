import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private router:Router, private http: HttpClient) { }

  products;
  query;

  ngOnInit() {
    this.updateProducts();
  }
  search(){
    this.http.get("search?query=" + this.query).subscribe(res => {
      var x = JSON.parse(JSON.stringify(res))
      this.products = x.products
    })
  }
  update(product){
    sessionStorage.setItem('product', JSON.stringify(product) )
    this.router.navigateByUrl('updateProduct');
  }
  updateProducts() {
    this.http.get("productList").subscribe(res => {
      var x = JSON.parse(JSON.stringify(res))
      this.products = x.products
    });
  }

  delete(id) {
    this.http.get("delete?id=" + id).subscribe(res => {
      var x = JSON.parse(JSON.stringify(res))
      this.updateProducts()
    })
  }



}
