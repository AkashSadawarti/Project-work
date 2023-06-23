import { Component , OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
// import { ProductEntry } from 'src/app/models/product-entry.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

Products : Product[] = []

constructor(private productService : ProductService){
  console.log("Product API Invoked"); 
}

ngOnInit(){
  this.getProducts();
  console.log(this.getProducts());
  
}

getProducts(){
  this.productService.getProducts().subscribe((res : any) => {
    console.log(res);
    this.Products = res;
  },err =>{
     console.log('Product api failed');
     
  })
}

}
