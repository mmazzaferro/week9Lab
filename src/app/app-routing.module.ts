import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes:Routes = [
  {path:'products', component:ProductsComponent},
  {path:'addProduct', component:AddProductComponent},
  {path:'updateProduct', component:UpdateProductComponent}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
