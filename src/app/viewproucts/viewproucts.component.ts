import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewproucts',
  templateUrl: './viewproucts.component.html',
  styleUrls: ['./viewproucts.component.css']
})
export class ViewprouctsComponent {
  constructor(api:ApiService){
    api.fetchproduct().subscribe(
      (response)=>{
        this.data=response;
      }
    )
  }

 data:any=[]
}
