import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {UserService} from './../../../Services/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
form:FormGroup;

  User:any;

  constructor(
    private fb : FormBuilder,
    private userservice : UserService,
    private toastr : ToastrService,
  ) 
  {this.form=this.fb.group({
    cedula:[''],
    nombre:[''],
    apellido:[''],
    password:[''],
    telefono:[''],
    email:[''],
    direccion:[''],
    serial_bici:['']
  }) }

  ngOnInit(): void {
    
  }
  agregarUsuario(){
    const User:any={
     cedula : this.form.get('cedula')?.value.toString(),
     nombre : this.form.get('nombre')?.value,
     apellido : this.form.get('apellido')?.value,
     password : this.form.get('password')?.value,
     telefono : this.form.get('telefono')?.value,
     email : this.form.get('email')?.value,
     direccion : this.form.get('direccion')?.value,
     serial_bici : this.form.get('serial_bici')?.value
    }
    this.userservice.addUser(User).subscribe(respuesta=>{
      this.ngOnInit();
      this.form.reset();
      this.toastr.success('Se agrego el usuario correctamente', 'Mensaje', );
    })
  }
}
