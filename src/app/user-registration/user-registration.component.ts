import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  name=""
  address=""
  phoneno=""
  email=""
  username=""
  password=""
  confirmpassword=""
 constructor(private api:ApiService){}

  readEmpData=()=>{
    let data:any={
      name:this.name,
      address:this.address,
      phoneno:this.phoneno,
      email:this.email,
      username:this.username,
      password:this.password,
    }
    if (this.password==this.confirmpassword) {
        this.api.adduser(data).subscribe(
        (response)=>{
        console.log(response)
        alert("Registration Successful")
        this.name=""
        this.address=""
        this.phoneno=""
        this.email=""
        this.username=""
        this.password=""
        this.confirmpassword=""
        })
      
    } else {
      alert("Password & Confirm Password does't match , Try Again")
      this.password=""
      this.confirmpassword=""
      
    }

}
}
