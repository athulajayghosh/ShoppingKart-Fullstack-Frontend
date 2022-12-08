import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  email=""
  password=""
  userdata:any={}
  constructor(private api:ApiService , private route:Router){

  }
  readvalue=()=>{
    let data={"email" : this.email,"password":this.password}
    console.log(data)
    this.api.fetchuser(data).subscribe(
      (response:any)=>{
        this.email=""
        this.password=""
        if (response.status == "success") {
          this.route.navigate(["/userhome"])
        } else {
          alert(response.message)
        }   

      }
    )}
}
