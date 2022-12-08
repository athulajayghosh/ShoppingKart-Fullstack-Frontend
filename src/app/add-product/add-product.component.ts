import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  name=""
  image=""
  category=""
  description=""
  price=""
 constructor(private api:ApiService){}

  readEmpData=()=>{
    let data:any={
      name:this.name,
      image:this.image,
      category:this.category,
      description:this.description,
      price:this.price,
    }
    this.api.addproduct(data).subscribe(
        (response)=>{
        console.log(response)
        alert("Product Added")
        this.name=""
        this.image=""
        this.category=""
        this.description=""
        this.price=""
        })
  

}

}
