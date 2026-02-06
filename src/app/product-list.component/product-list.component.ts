import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.services'; 
import { ProductInterFace } from '../product-inter-face';

@Component({
  selector: 'app-product',
  imports: [],
  template: `
  <p><u><b>Products</b></u></p>
  Status: {{ retmsg }}<br><br>
    <section>
      
    @for (product of myproducts; track $index) 
      {
          User ID: {{ product.id }}<br>
          {{ product.title}} - {{ product.completed}}<br>
      }
    </section>>
    Nothing
  `,
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {   
   myproducts: ProductInterFace[] = [];
   retmsg: string ='Intializing...';
   constructor(private productService: ProductService) { }
   
    ngOnInit() 
    {
        this.retmsg ='On Init()';
        this.productService.getProducts().subscribe({
        next: (data) => {
            this.myproducts = data;
            this.retmsg ='Data fetching';
        },
        error: (error) => {
            console.log(error),
            this.retmsg = error
        },
        complete: () => {
            console.log('complete'),
            this.retmsg = 'Data fetched successfully.'
        }
      })      
    }

}
