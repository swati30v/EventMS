import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http:HttpClient) { }

  login(data){
    console.log(data,"TTTTTTTTTTTTTT")
    const httpoption={
      headers:new HttpHeaders({
        "Accept":"application/json"
      })
    }
     return this.http.post("http://142.93.217.254/login",data)
  }

  signup(data){
    console.log(data,"TTTTTTTTTTTTTT")
    const httpoption={
      headers:new HttpHeaders({
        "Accept":"application/json"
      })
    }
     return this.http.post("http://142.93.217.254/newlogin",data)
  }

    
  

}
