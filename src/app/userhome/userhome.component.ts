import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
  constructor(api:ApiService){
    api.fetchproduct().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

 data:any=[]
 
}
