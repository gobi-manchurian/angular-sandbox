import { Component, EventEmitter, Input, Output, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Product } from '../product.model';
import { LoggingService } from 'src/app/logging.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() item!:Product;
  @Output() productClicked = new EventEmitter<Product>();
  @Output() needDelete= new EventEmitter<Product>();

  constructor(private logger: LoggingService){
    console.log("1. constructor called (item is undefined here)");
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('2. onChanges called (input changed)');
    console.log(changes);

  }
  ngOnInit(){
    console.log('3. ngOnInit called (Item ready): '+ this.item.title);

  }
  ngOnDestroy(){
    console.log('4. ngOnDestroy called (component is dying!)');
  }
  
  
  
  onBuy(){
    console.log('child:button clicked for'+this.item.title);
    this.productClicked.emit(this.item);
    this.logger.logStatus("User clicked buy on "+this.item.title);
  }
  onDelete(){
    console.log("delete request for: ",this.item.title);
    this.needDelete.emit(this.item)
  }
}
