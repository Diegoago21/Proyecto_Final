import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  estalogueado=false;

  constructor(private router: Router) { }
  

  ngOnInit(): void {

     const token = localStorage.getItem('token');
     if(token != undefined){
      this.estalogueado=true;
     }
     console.log(this.estalogueado);
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    this.router.navigate([ '' ]);
    this.ngOnInit();
  }

  //  validarToken(): void{
  //    const token = localStorage.getItem('token');
  //    const estalogueado = !!token ;
  //    console.log(estalogueado);
  //  }

}