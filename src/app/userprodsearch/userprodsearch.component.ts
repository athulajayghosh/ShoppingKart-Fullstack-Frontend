import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userprodsearch',
  templateUrl: './userprodsearch.component.html',
  styleUrls: ['./userprodsearch.component.css']
})
export class UserprodsearchComponent {
  name=""

  searchData:any=[]
  flag1=true
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
          this.flag1=false
          this.searchData=(response)
          
        }
      }
    )  }

}
