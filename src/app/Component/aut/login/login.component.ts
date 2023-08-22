import { Component, OnInit } from '@angular/core';
import {UserService} from './../../../Services/user.service';
import {Router} from '@angular/router';
import {Validator}from'@angular/forms';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  //FormBuilder: any;


 
  constructor(
    private UserService: UserService, 
    public formBuilder: FormBuilder,
    private router: Router) {

  this.formLogin = this.formBuilder.group({
       cedula: [''],
       password:['']
     });
  }


  ngOnInit(): void {

  }

  
  //Creacion metodo login
  logIn(){
     /*const cedula='1053'
     const password='123456'*/
     const cedula=this.formLogin.get('cedula')?.value;
    const password=this.formLogin.get('password')?.value;
        this.UserService.login(cedula,password).subscribe((res:any)=>{
       localStorage.setItem('token',res.token);
      this.router.navigate(['menu'])
    
    
     })
    // console.log(cedula,password)
  }
  
}
