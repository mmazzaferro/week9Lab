import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit() {
  }
  add(name, price, description) {
    this.http.get("add?name=" + name + "&price=" + price + "&description=" + description).subscribe(res => {
      console.log(name + " " + price + " " + description)
      var x = JSON.parse(JSON.stringify(res))
      this.router.navigateByUrl("products")
    });
  }
}
