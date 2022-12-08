import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  fetchuser=(dataToSend:any)=>
    {
      return this.http.post("http://localhost:8080/userlogin",dataToSend)
    }

  adduser=(dataToSend:any)=>
    {
      return this.http.post("http://localhost:8080/adduser",dataToSend)
    }

  addproduct=(dataToSend:any)=>
    {
      return this.http.post("http://localhost:8080/addproduct",dataToSend)
    }  

  fetchproduct=()=>{
      return this.http.get("http://localhost:8080/viewproduct")
    }

  searchproduct=(dataToSend:any)=>
    {
      return this.http.post("http://localhost:8080/searchproduct",dataToSend)
    }

}
