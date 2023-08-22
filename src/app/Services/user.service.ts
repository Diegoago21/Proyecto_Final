import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Urls APIs
  BASEAPI: string='http://localhost:3000/api/';
  USERAPI: string= 'user/';
  LOGINGAPI: string= 'login/'

  constructor(private http:HttpClient, private jwtHelper: JwtHelperService,) {
    

   }
   //Metodo login
   login(cedula:any, password:any ) {
    const body= {cedula,password}
    
    console.log(body);
    console.log(this.BASEAPI+this.USERAPI+this.LOGINGAPI);

    return this.http.post(this.BASEAPI+this.USERAPI+this.LOGINGAPI,body);  
   }
   isLogin(): boolean {
    const token = localStorage.getItem('token');
    if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
      return false;
    }
    return true;    
  }
  
  addUser(user:any):Observable<any>{
    return this.http.post(this.BASEAPI+this.USERAPI,user)
  }
}
