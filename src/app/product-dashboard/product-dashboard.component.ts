import { Component,OnInit } from '@angular/core';
import { Product } from './product.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent {
  
  products!:Product[];
  constructor(private prodService:ProductService){}
  handleBuy(product:Product)
  {
    console.log("parent recieved: "+ product.title)
    alert(`you bought the ${product.title} for Rs. ${product.price}`)
  }
  ngOnInit(){
    console.log("Requesting data...");
    this.prodService.getAllProducts().subscribe(
      (data)=>{
        console.log("Data Received: "+data);
        this.products=data;
      },
      (error)=>{
        console.log("Couldnt get data",error);
      }
    );
  }
  createNewProduct(){
    const newProduct={
    "title": 'Angular Masterclass Book',
    "price": 19.99,
    "description": 'Learn Angular from scratch',
    "image": 'https://i.pravatar.cc',
    "category": 'education'
    };
    console.log("adding new product..");
    this.prodService.addProduct(newProduct).subscribe(
      (response)=>{
        console.log('server responded: ',response);
        this.products.push(response)
      },
      (error)=>{
        console.error('Error: ',error);
      }
    );
  }
  productDelete(product:any){
    this.prodService.deleteProduct(product.id).subscribe(
    (success)=>{
      console.log('server responded: ',success);
      this.products=this.products.filter(p=>p.id!==product.id);
    },
    (error)=>{
      console.error('something is wrong',error)
    }
    );
    
  }

}
