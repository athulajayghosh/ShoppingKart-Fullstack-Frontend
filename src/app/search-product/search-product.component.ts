import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  name=""
  searchData:any=[]
  constructor(private api:ApiService){

  }
  readvalue=()=>{
    let data={"name" : this.name}
    console.log(data)
    this.api.searchproduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length == 0) {
          alert("Invalid Employee Code")
          
        } else {
          this.searchData=(response)
          
        }
      }
    )  }

}
